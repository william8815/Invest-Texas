<template>
  <div class="relative w-full aspect-square flex items-center justify-center">
    <!-- SVG Map -->
    <svg
      viewBox="0 0 100 100"
      class="w-full h-full"
      style="filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))"
    >
      <defs>
        <!-- Texas gradient -->
        <linearGradient id="texasGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.25" />
        </linearGradient>

        <!-- Route gradient for highway -->
        <linearGradient id="highwayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0ea5e9" />
          <stop offset="50%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#0ea5e9" />
        </linearGradient>

        <!-- Glow filter -->
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <!-- Marker gradient -->
        <radialGradient id="markerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#d97706" />
        </radialGradient>
      </defs>

      <!-- Simplified Texas Shape -->
      <path
        d="M 30,20 L 70,20 L 75,30 L 80,45 L 75,60 L 70,75 L 60,85 L 45,85 L 35,80 L 25,70 L 20,55 L 20,40 L 25,30 Z"
        fill="url(#texasGradient)"
        stroke="#0369a1"
        stroke-width="0.5"
        opacity="0.6"
      />

      <!-- ========== Highway 69 Route ========== -->
      <g v-if="activeSection === 'highway'">
        <!-- Highway line from center going both directions -->
        <path
          ref="highwayPath"
          d="M 50,10 L 50,50 L 50,90"
          stroke="url(#highwayGradient)"
          stroke-width="2.5"
          stroke-linecap="round"
          fill="none"
          :stroke-dasharray="highwayPathLength"
          :stroke-dashoffset="highwayDashOffset"
          filter="url(#glow)"
        />

        <!-- Highway labels -->
        <g :opacity="routeProgress">
          <text x="55" y="22" font-size="3.5" fill="#0369a1" font-weight="600">HW 69</text>
          <text x="55" y="26" font-size="2.5" fill="#64748b">To Canada</text>

          <text x="55" y="78" font-size="3.5" fill="#0369a1" font-weight="600">HW 69</text>
          <text x="55" y="82" font-size="2.5" fill="#64748b">To Mexico</text>
        </g>
      </g>

      <!-- ========== Airport Route ========== -->
      <g v-if="activeSection === 'airport'">
        <!-- Curved path from park center to airport -->
        <path
          ref="airportPath"
          :d="airportCurvePath"
          stroke="#06b6d4"
          stroke-width="1.5"
          stroke-linecap="round"
          fill="none"
          :stroke-dasharray="airportPathLength"
          :stroke-dashoffset="airportDashOffset"
        />

        <!-- Airport marker -->
        <g :opacity="routeProgress">
          <circle cx="65" cy="32" r="4" fill="#06b6d4" stroke="#fff" stroke-width="1.5" />
          <text x="63" y="34" font-size="4" fill="#fff">✈</text>

          <!-- Distance label -->
          <rect
            x="54"
            y="38"
            width="18"
            height="8"
            rx="2"
            fill="white"
            stroke="#06b6d4"
            stroke-width="0.5"
          />
          <text x="63" y="44" font-size="3" fill="#0369a1" text-anchor="middle" font-weight="600">
            15-20 mi
          </text>
        </g>
      </g>

      <!-- ========== Port Route ========== -->
      <g v-if="activeSection === 'port'">
        <!-- Curved path from park center to port -->
        <path
          ref="portPath"
          :d="portCurvePath"
          stroke="#0284c7"
          stroke-width="1.5"
          stroke-linecap="round"
          fill="none"
          :stroke-dasharray="portPathLength"
          :stroke-dashoffset="portDashOffset"
        />

        <!-- Port marker -->
        <g :opacity="routeProgress">
          <circle cx="32" cy="72" r="4" fill="#0284c7" stroke="#fff" stroke-width="1.5" />
          <text x="30" y="74" font-size="4" fill="#fff">⚓</text>

          <!-- Distance label -->
          <rect
            x="36"
            y="64"
            width="18"
            height="8"
            rx="2"
            fill="white"
            stroke="#0284c7"
            stroke-width="0.5"
          />
          <text x="45" y="70" font-size="3" fill="#0369a1" text-anchor="middle" font-weight="600">
            30-40 mi
          </text>
        </g>
      </g>

      <!-- ========== Amenity Routes ========== -->
      <g v-if="isAmenitySection && currentAmenity">
        <!-- All amenity markers (dimmed) -->
        <g v-for="(amenity, index) in amenities" :key="'marker-' + index">
          <circle
            :cx="amenity.x"
            :cy="amenity.y"
            :r="index === activeAmenityIndex ? 3 : 2"
            :fill="index === activeAmenityIndex ? '#0ea5e9' : '#94a3b8'"
            :stroke="index === activeAmenityIndex ? '#fff' : 'none'"
            :stroke-width="index === activeAmenityIndex ? 1 : 0"
            :opacity="index === activeAmenityIndex ? 1 : 0.4"
            class="transition-all duration-300"
          />
        </g>

        <!-- Active amenity route -->
        <path
          ref="amenityPath"
          :d="amenityCurvePath"
          stroke="#0ea5e9"
          stroke-width="1.5"
          stroke-linecap="round"
          fill="none"
          :stroke-dasharray="amenityPathLength"
          :stroke-dashoffset="amenityDashOffset"
        />

        <!-- Active amenity label -->
        <g :opacity="routeProgress">
          <!-- Name label -->
          <text
            :x="currentAmenity.x"
            :y="currentAmenity.y - 6"
            font-size="3.2"
            fill="#0f172a"
            text-anchor="middle"
            font-weight="700"
          >
            {{ currentAmenity.name }}
          </text>

          <!-- Distance label on the route -->
          <g v-if="routeProgress > 0.3">
            <rect
              :x="(50 + currentAmenity.x) / 2 - 8"
              :y="(50 + currentAmenity.y) / 2 - 5"
              width="16"
              height="7"
              rx="2"
              fill="white"
              stroke="#0ea5e9"
              stroke-width="0.5"
              :opacity="routeProgress"
            />
            <text
              :x="(50 + currentAmenity.x) / 2"
              :y="(50 + currentAmenity.y) / 2"
              font-size="2.8"
              fill="#0369a1"
              text-anchor="middle"
              font-weight="600"
              :opacity="routeProgress"
            >
              {{ currentAmenity.distance }}
            </text>
          </g>
        </g>
      </g>

      <!-- ========== Park Center (Always Visible) ========== -->
      <g>
        <!-- Pulse animation -->
        <circle cx="50" cy="50" r="3" fill="#f59e0b" opacity="0.3">
          <animate attributeName="r" from="3" to="10" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
        </circle>

        <!-- Main marker -->
        <circle
          cx="50"
          cy="50"
          r="4"
          fill="url(#markerGradient)"
          stroke="#fff"
          stroke-width="2"
          filter="url(#glow)"
        />

        <!-- Park icon -->
        <text x="47.5" y="52" font-size="4" fill="#fff">★</text>

        <!-- Park label -->
        <text x="50" y="60" font-size="3.5" fill="#f59e0b" text-anchor="middle" font-weight="bold">
          USMCA Park
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted, nextTick } from "vue";

const props = defineProps({
  animationState: {
    type: Object,
    default: () => ({
      mapPosition: 0,
      activeSection: "none",
      routeProgress: 0,
    }),
  },
  amenities: {
    type: Array,
    default: () => [],
  },
  activeAmenityIndex: {
    type: Number,
    default: 0,
  },
});

// Path refs for measuring
const highwayPath = ref(null);
const airportPath = ref(null);
const portPath = ref(null);
const amenityPath = ref(null);

// Path lengths (will be calculated)
const highwayPathLength = ref(160); // Approximate for M 50,10 L 50,90
const airportPathLength = ref(50);
const portPathLength = ref(50);
const amenityPathLength = ref(50);

// Active section computed
const activeSection = computed(() => props.animationState.activeSection);

// Route progress (0-1)
const routeProgress = computed(() => props.animationState.routeProgress);

// Is amenity section
const isAmenitySection = computed(() => activeSection.value.startsWith("amenity-"));

// Current amenity
const currentAmenity = computed(() => {
  if (props.amenities && props.amenities.length > 0) {
    return props.amenities[props.activeAmenityIndex];
  }
  return null;
});

// ========== Curve Path Generators ==========

// Generate bezier curve from center (50,50) to target
const generateCurvePath = (targetX, targetY) => {
  const startX = 50;
  const startY = 50;

  // Calculate control points for a nice curve
  const midX = (startX + targetX) / 2;
  const midY = (startY + targetY) / 2;

  // Offset control point perpendicular to the line
  const dx = targetX - startX;
  const dy = targetY - startY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Control point offset (creates curve)
  const offset = distance * 0.3;
  const perpX = (-dy / distance) * offset;
  const perpY = (dx / distance) * offset;

  const ctrlX = midX + perpX;
  const ctrlY = midY + perpY;

  return `M ${startX},${startY} Q ${ctrlX},${ctrlY} ${targetX},${targetY}`;
};

// Airport curve path
const airportCurvePath = computed(() => generateCurvePath(65, 32));

// Port curve path
const portCurvePath = computed(() => generateCurvePath(32, 72));

// Amenity curve path
const amenityCurvePath = computed(() => {
  if (currentAmenity.value) {
    return generateCurvePath(currentAmenity.value.x, currentAmenity.value.y);
  }
  return "";
});

// ========== Dash Offset Calculations (for drawing animation) ==========

// Highway: draws from center outward (special case)
const highwayDashOffset = computed(() => {
  // Full length is 160 (from y=10 to y=90 through center)
  // We want to draw from center outward, so we start at 80 (half) and go to 0
  const progress = routeProgress.value;
  return highwayPathLength.value * (1 - progress);
});

// Airport dash offset
const airportDashOffset = computed(() => {
  return airportPathLength.value * (1 - routeProgress.value);
});

// Port dash offset
const portDashOffset = computed(() => {
  return portPathLength.value * (1 - routeProgress.value);
});

// Amenity dash offset
const amenityDashOffset = computed(() => {
  return amenityPathLength.value * (1 - routeProgress.value);
});

// ========== Path Length Calculation ==========

// Calculate path lengths on mount and when paths change
const calculatePathLengths = async () => {
  await nextTick();

  if (highwayPath.value) {
    highwayPathLength.value = highwayPath.value.getTotalLength();
  }
  if (airportPath.value) {
    airportPathLength.value = airportPath.value.getTotalLength();
  }
  if (portPath.value) {
    portPathLength.value = portPath.value.getTotalLength();
  }
  if (amenityPath.value) {
    amenityPathLength.value = amenityPath.value.getTotalLength();
  }
};

// Watch for section changes to recalculate path lengths
watch(
  () => activeSection.value,
  () => {
    calculatePathLengths();
  }
);

watch(
  () => props.activeAmenityIndex,
  () => {
    calculatePathLengths();
  }
);

onMounted(() => {
  calculatePathLengths();
});
</script>

<style scoped>
/* Smooth transitions for path animations */
path {
  transition: stroke-dashoffset 0.1s ease-out;
}

/* Marker transitions */
circle {
  transition: all 0.3s ease-out;
}
</style>
