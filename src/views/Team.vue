<script setup>
import { ref, reactive, onMounted } from "vue";
import { useSeoMeta, useHead } from "@unhead/vue";
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

// SEO Meta
useSeoMeta({
  title: "Expert Team - 38+ Years International Business Experience | InvesTexas",
  description:
    "Meet our expert team: Dr. Frank Lin (38 years, FTZ member), Prof. Mike Lin (Cleveland State), Felix Fu (20+ years VP), Greg Sheng (RIBA architect), Victor Zhang (FRM). Decades of combined experience in international business, finance, and engineering.",
  keywords:
    "InvesTexas team, Dr Frank Lin, international business experts, Texas investment advisors, FTZ expert, Cleveland State professor, RIBA architect, FRM certified, business consultants Texas, 38 years experience",

  // Open Graph
  ogTitle: "Expert Team - Decades of International Business & Finance Experience",
  ogDescription:
    "Led by Dr. Frank Lin with 38 years experience. Team includes Cleveland State professor, RIBA architect, FRM certified manager, and international business veterans.",
  ogImage: "https://via.placeholder.com/1200x630?text=Expert+Team",
  ogType: "website",
  ogSiteName: "InvesTexas",
  ogLocale: "en_US",

  // Twitter Card
  twitterCard: "summary_large_image",
  twitterTitle: "Meet Our Expert Team - 38+ Years Combined Experience",
  twitterDescription:
    "International business, finance, engineering, and development experts ready to guide your Texas investment.",
  twitterImage: "https://via.placeholder.com/1200x630?text=Expert+Team",

  // Additional SEO
  robots: "index, follow",
  author: "InvesTexas",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "InvesTexas",
        description:
          "Expert team with decades of combined experience in international business, finance, engineering, and development",
        employee: [
          {
            "@type": "Person",
            name: "Dr. Frank Lin",
            jobTitle: "Sinopac International Group Leader",
            description:
              "Outstanding Entrepreneur of Texas with 38 years of international business experience. Regular/Active Member of the National Association of Foreign Trade Zones.",
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "National Chiao Tung University",
              },
              {
                "@type": "CollegeOrUniversity",
                name: "Shanghai Jiao Tong University",
              },
            ],
            award: [
              "Outstanding Entrepreneur of Texas, USA",
              "Distinguished Alumnus of National Chiao Tung University",
              "Model Youth Career Development of the Republic of China (Taiwan 1983)",
            ],
          },
          {
            "@type": "Person",
            name: "Chien-Hua (Mike) Lin",
            jobTitle: "Emeritus Professor, Computer and Electric Engineering",
            worksFor: {
              "@type": "CollegeOrUniversity",
              name: "Cleveland State University",
              department: "Washkewicz College Of Engineering",
            },
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "Case Western Reserve University",
                degree: "Ph.D., Operations Research",
              },
              {
                "@type": "CollegeOrUniversity",
                name: "National Chiao Tung University",
                degree: "B.Sc., Electronic Engineering",
              },
            ],
            award: ["Fulbright Scholar"],
          },
          {
            "@type": "Person",
            name: "Carpenter Lee",
            jobTitle: "CEO",
            worksFor: {
              "@type": "Organization",
              name: "Lifecare Foundation",
            },
            description:
              "30 years of experience in Philips Lifeline technology application in the United States",
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "China Medical University",
                department: "Department of Pharmacy",
              },
            ],
          },
          {
            "@type": "Person",
            name: "Felix Fu",
            jobTitle: "VP",
            worksFor: {
              "@type": "Organization",
              name: "Sinopac International Corp.",
            },
            description:
              "20+ years experience in international marketing, risk management, finance, and logistics",
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "Illinois Institute of Technology",
                degree: "Master of Business Administration",
              },
            ],
            knowsLanguage: ["English", "Chinese"],
          },
          {
            "@type": "Person",
            name: "Greg Sheng",
            jobTitle: "Research and Development Director",
            worksFor: {
              "@type": "Organization",
              name: "Dayuan Architecture Design Co., Ltd.",
            },
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "Kingston University",
                degree: "RIBA Part III Qualified",
              },
              {
                "@type": "CollegeOrUniversity",
                name: "AA Architectural Association",
                degree: "RIBA Part I/II",
              },
            ],
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "RIBA (Royal Institute of British Architects) Part III Qualified",
            },
          },
          {
            "@type": "Person",
            name: "Victor Zhang",
            jobTitle: "General Manager of Market Capitalization Management",
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Certified Financial Risk Manager (FRM)",
            },
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "Beijing Foreign Studies University",
                degree: "Bachelor's in German Studies",
              },
              {
                "@type": "CollegeOrUniversity",
                name: "University of Bonn",
                degree: "Master's in Financial Engineering",
              },
            ],
          },
        ],
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "InvesTexas Expert Team",
        description:
          "Professional team providing international business consulting, investment guidance, and comprehensive support for Texas investments",
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        serviceType: [
          "International Business Consulting",
          "Investment Advisory",
          "Foreign Trade Zone Expertise",
          "Architectural Design",
          "Financial Risk Management",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "38",
          bestRating: "50",
          worstRating: "0",
          ratingCount: "1",
          description: "Years of combined international business experience",
        },
      }),
    },
  ],
});

// images
import teams1_1 from "@/assets/images/teams/teams1_1.png";
import teams2_1 from "@/assets/images/teams/teams2_1.png";
import teams3_1 from "@/assets/images/teams/teams3_1.png";
import teams4_1 from "@/assets/images/teams/teams4_1.png";
import teams5_1 from "@/assets/images/teams/teams5_1.png";
import teams6_1 from "@/assets/images/teams/teams6_1.png";

// 圖片載入狀態
const teamImagesLoaded = reactive({});
const modalImageLoaded = ref(false);

// Modal state
const showModal = ref(false);
const selectedMember = ref(null);

const openModal = (member) => {
  selectedMember.value = member;
  showModal.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  showModal.value = false;
  selectedMember.value = null;
  modalImageLoaded.value = false;
  document.body.style.overflow = "";
};

const teamMembers = [
  {
    name: "Dr. Frank Lin",
    title: "Sinopac International Group Leader",
    imagePlaceholder: true,
    experience: [
      "Sinopac International Group (www.Sinopac.us) Leader (Since 1987)",
      "Outstanding Entrepreneur of Texas, USA",
      "Regular/Active Member of the National Association of Foreign Trade Zones, USA",
      "AT&T manufacturing partner in USA & Mexico (1987–2005)",
      "Model Youth Career Development of the Republic of China (Taiwan 1983)",
      "Chairman of 2010 Global Alumni Reunion of Chiao-Tung / Jiao-Tong University",
      "Distinguished Alumnus of National Chiao Tung University, Taiwan",
      "Advisory Professor at Shanghai Jiao Tong University",
      "Advisory Professor at Southwest Jiao Tong University",
      "Former Advisor to the Chairman & General Manager's Office of UMC, Taiwan",
      "Chairman of Sinoca Enterprises Co., Ltd., Taiwan (1974–1987)",
      "Dean of Global Investment and Markets, International Academy of Education (I.A.E)",
      "Doctor of Business Management, International Academy of Education (I.A.E)",
      "Doctor of Natural Medicine, International Academy of Education (I.A.E)",
    ],
    image: teams1_1,
  },
  {
    name: "Chien-Hua (Mike) Lin, Ph.D.",
    title: "Emeritus Professor | Computer and Electric Engineering",
    subtitle: "Washkewicz College Of Engineering, Cleveland State University",
    imagePlaceholder: true,
    education: [
      "Ph.D., Operations Research – Case Western Reserve University, 1975",
      "M.B.A. – Case Western Reserve University, 1980",
      "M.Sc., Operations Research – Case Western Reserve University, 1973",
      "M.Sc. Candidate, Electrical Engineering – National Taiwan University, 1971",
      "B.Sc., Electronic Engineering – National Chiao Tung University, 1969",
    ],
    experience: [
      "Emeritus Professor | Computer and Electric Engineering, Washkewicz College Of Engineering, Cleveland State University (2016-present)",
      "Fulbright Scholar & Visiting Professor | Department of Computer Science and Information Engineering, Chang Gung University, Taiwan (2010–2012)",
      "Professor | Computer and Electric Engineering, Washkewicz College Of Engineering, Cleveland State University",
      "Professor & Former Department Chair | Computer and Information Science Department, Cleveland State University",
    ],
    image: teams2_1,
  },
  {
    name: "Carpenter Lee",
    title: "CEO of Lifecare Foundation",
    imagePlaceholder: true,
    description:
      "With 30 years of experience in the application of Philips Lifeline technology in the United States, we have many years of industry experience and resources in the field of health management, and the most professional emergency rescue notification and health management services.",
    education: [
      "Department of Pharmacy, China Medical University",
      "Institute of Applied Chemistry, Chinese Culture University",
    ],
    experience: [
      "CEO of Lifecare Foundation",
      "Chairman of Health and Welfare Business Co., Ltd.",
      "Executive Director of Emergency Medical Response Center for Mainland Compatriots in Taiwan",
      "Former Director of Asian Chinese Medical Management Association",
      "Former Director of Central University 80 Business Model Management Society",
    ],
    image: teams3_1,
  },
  {
    name: "Felix Fu",
    title: "VP of Sinopac International Corp.",
    imagePlaceholder: true,
    description:
      "Utilize my 20+ years' experiences as a senior corporate officer with extensive experience in international and national marketing, risk management, finance, logistic business, seafood production, metal and vessel trading to make a company more solid and profitable.",
    education: [
      "Master of Business Administration, 1983 Illinois Institute of Technology, Chicago, IL - Major in Marketing",
      "Bachelor of Science, 1979 National Chung-Tung University, Taiwan - Major in Marine Transportation and Shipping Management, Business Administration and Analysis",
    ],
    certifications: [
      "2008, Introduction to Spanish for Professionals, Texas State Technical College",
      "2008, Intermediate Spanish for Professionals II, Texas State Technical College",
      "2003, Pesticide Usage Training, Texas Department of Agriculture - Private Pesticide Applicator License",
      "1990, IATA Dangerous Cargo Seminar",
      "1985, Financial Training for International Trade and Commodities at Bank of America",
    ],
    skills: [
      "Bilingual in English and Chinese (spoken, written)",
      "Mathematical Modeling, Metric Analysis, Quantified Monetary Analysis",
      "International Freight Forwarding, Logistic System, Risk Management",
      "Metal and Vessel Trading, Sea Food Production and Marketing",
      "Familiarity with both American & Asian Import/Export rules and practices",
      "Strong connections to major international Air/Ocean and local inland carriers",
      "Proficient in Office, Word, Excel, Works, and QuickBooks",
      "Capable of strategic planning for multi-year major capital projects",
    ],
    image: teams4_1,
  },
  {
    name: "Greg Sheng",
    title: "Research and Development Director",
    subtitle: "Dayuan Architecture Design Co., Ltd.",
    imagePlaceholder: true,
    education: [
      "RIBA (Royal Institute of British Architects) Part III Qualified at Kingston University - not registered",
      "AA Architectural Association school of Architectural (RIBA Part I/II)",
      "Chinese Culture University (Fine Art Department)",
    ],
    chinaExperience: [
      "2017-present, Architectural Designer (Dayuan Architecture Design Co., Ltd.)",
      "2013-2017, Designer Management Dept. (Dayuan Architecture Design Co., Ltd.)",
      "2012-2013, Project Design Manager Management Dept. (Dayuan Architecture Design Co., Ltd.)",
    ],
    ukExperience: [
      "2011-2012, Foster and Partners, London",
      "2001-2011, East London University",
      "2001-2009, Glas Architects, London",
    ],
    image: teams5_1,
  },
  {
    name: "Victor Zhang",
    title: "General Manager of Market Capitalization Management",
    subtitle: "Certified Financial Risk Manager (FRM)",
    imagePlaceholder: true,
    description:
      "He holds a Bachelor's in German Studies from Beijing Foreign Studies University and a Master's in Financial Engineering from the University of Bonn, With international experience in Germany, Switzerland, China and the U.S.",
    image: teams6_1,
  },
];

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  const heroContent = document.querySelector(".hero__content");
  const heroContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
        heroContentObserver.unobserve(entry.target);
      }
    });
  }, options);
  heroContentObserver.observe(heroContent);

  // Team List
  const teamItems = document.querySelectorAll(".team__item");
  const teamItemsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.dataset.index % 2 === 0) {
          entry.target.classList.remove("opacity-0", "translate-x-[100px]");
          entry.target.classList.add("opacity-100", "translate-x-0");
        } else {
          entry.target.classList.remove("opacity-0", "translate-x-[-100px]");
          entry.target.classList.add("opacity-100", "translate-x-0");
        }
        teamItemsObserver.unobserve(entry.target);
      }
    });
  }, options);
  teamItems.forEach((item) => {
    teamItemsObserver.observe(item);
  });
});
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section
      class="hero__section relative py-20 bg-gradient-to-br from-sky-900 to-sky-800 text-white"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="hero__content text-center opacity-0 translate-y-10 transition-all duration-500">
          <h1 class="text-5xl md:text-6xl mb-6">Our Expert Team</h1>
          <p class="text-xl text-sky-100 max-w-3xl mx-auto">
            Decades of combined experience in international business, finance, engineering, and
            development
          </p>
        </div>
      </div>
    </section>

    <!-- Team Members -->
    <section class="team__section py-20 overflow-x-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-16 team__list">
          <div v-for="(member, index) in teamMembers" :key="index">
            <div
              class="team__item bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl duration-300 opacity-0 transition-all duration-500"
              :class="{
                'translate-x-[100px]': index % 2 === 0,
                'translate-x-[-100px]': index % 2 !== 0,
              }"
              :data-index="index"
            >
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div
                  class="lg:col-span-1 bg-gradient-to-r from-sky-700 to-sky-500 p-8 text-white flex lg:flex-col items-center lg:justify-center gap-4"
                >
                  <!-- avatar -->
                  <div class="w-48 h-48 rounded-full overflow-hidden relative">
                    <!-- Skeleton -->
                    <div
                      v-if="member.image && !teamImagesLoaded[index]"
                      class="absolute inset-0 bg-white/20 animate-pulse rounded-full flex items-center justify-center"
                    >
                      <Icon name="group" size="48" class="text-white/50" />
                    </div>
                    <!-- 實際圖片 -->
                    <img
                      v-if="member.image"
                      :src="member.image"
                      :alt="member.name"
                      loading="lazy"
                      class="w-full h-full object-cover transition-opacity duration-500"
                      :class="teamImagesLoaded[index] ? 'opacity-100' : 'opacity-0'"
                      @load="teamImagesLoaded[index] = true"
                    />
                    <span v-else class="text-6xl flex items-center justify-center w-full h-full">{{
                      member.name.charAt(0)
                    }}</span>
                  </div>
                  <div class="flex flex-col lg:items-center">
                    <h3 class="text-2xl mb-2">{{ member.name }}</h3>
                    <p class="text-sky-100 mb-2">{{ member.title }}</p>
                    <p v-if="member.subtitle" class="text-sm text-sky-200">
                      {{ member.subtitle }}
                    </p>
                  </div>
                </div>

                <div class="lg:col-span-2 p-8 flex flex-col">
                  <!-- Content with height limit and fade effect -->
                  <div class="relative max-h-[200px] overflow-hidden">
                    <!-- Description -->
                    <p v-if="member.description" class="text-gray-700 mb-6 leading-relaxed">
                      {{ member.description }}
                    </p>

                    <!-- Experience -->
                    <div v-if="member.experience" class="mb-6">
                      <h4 class="text-xl text-gray-900 mb-3">Experience</h4>
                      <ul class="space-y-2">
                        <li
                          v-for="(exp, idx) in member.experience"
                          :key="idx"
                          class="flex items-start space-x-3"
                        >
                          <div class="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                          <span class="text-gray-700">{{ exp }}</span>
                        </li>
                      </ul>
                    </div>

                    <!-- Certifications & Training -->
                    <div v-if="member.certifications" class="mb-6">
                      <h4 class="text-xl text-gray-900 mb-3">Certifications & Training</h4>
                      <ul class="space-y-2">
                        <li
                          v-for="(cert, idx) in member.certifications"
                          :key="idx"
                          class="flex items-start space-x-3"
                        >
                          <div class="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                          <span class="text-gray-700">{{ cert }}</span>
                        </li>
                      </ul>
                    </div>

                    <!-- Skills & Expertise -->
                    <div v-if="member.skills" class="mb-6">
                      <h4 class="text-xl text-gray-900 mb-3">Skills & Expertise</h4>
                      <div class="flex flex-wrap gap-2">
                        <span
                          v-for="(skill, idx) in member.skills"
                          :key="idx"
                          class="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm"
                        >
                          {{ skill }}
                        </span>
                      </div>
                    </div>

                    <!-- China Work Experience -->
                    <div v-if="member.chinaExperience" class="mb-6">
                      <h4 class="text-xl text-gray-900 mb-3">China Work Experience</h4>
                      <ul class="space-y-2">
                        <li
                          v-for="(exp, idx) in member.chinaExperience"
                          :key="idx"
                          class="flex items-start space-x-3"
                        >
                          <div class="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                          <span class="text-gray-700">{{ exp }}</span>
                        </li>
                      </ul>
                    </div>

                    <!-- UK Work Experience -->
                    <div v-if="member.ukExperience" class="mb-6">
                      <h4 class="text-xl text-gray-900 mb-3">UK Work Experience</h4>
                      <ul class="space-y-2">
                        <li
                          v-for="(exp, idx) in member.ukExperience"
                          :key="idx"
                          class="flex items-start space-x-3"
                        >
                          <div class="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                          <span class="text-gray-700">{{ exp }}</span>
                        </li>
                      </ul>
                    </div>

                    <!-- Education -->
                    <div v-if="member.education" class="mb-6">
                      <h4 class="text-xl text-gray-900 mb-3">Education</h4>
                      <ul class="space-y-2">
                        <li
                          v-for="(edu, idx) in member.education"
                          :key="idx"
                          class="flex items-start space-x-3"
                        >
                          <div class="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                          <span class="text-gray-700">{{ edu }}</span>
                        </li>
                      </ul>
                    </div>

                    <!-- Fade overlay -->
                    <div
                      class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"
                    />
                  </div>

                  <!-- View More Button -->
                  <div class="mt-4 pt-4 border-t border-gray-100">
                    <button
                      @click="openModal(member)"
                      class="inline-flex items-center gap-2 px-4 py-2 text-sky-600 hover:text-sky-700 hover:bg-sky-50 rounded-lg transition-colors duration-200 font-medium"
                    >
                      <span>View More</span>
                      <Icon name="arrow_forward" size="18" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <h2 class="text-4xl mb-6">Work With Our Expert Team</h2>
          <p class="text-xl text-sky-600 mb-8">
            Let our experienced professionals guide your investment journey in Texas
          </p>
          <a
            href="/contact"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-700 to-sky-500 text-white rounded-lg hover:from-sky-800 hover:to-sky-600 transition-all shadow-lg shadow-sky-500/20"
          >
            Contact Our Team
            <Icon name="arrow_forward" size="20" class="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>

    <!-- Member Detail Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showModal && selectedMember"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @click.self="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeModal" />

          <!-- Modal Content -->
          <div
            class="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden z-10"
          >
            <!-- Modal Header -->
            <div
              class="h-[140px] bg-gradient-to-r from-sky-700 to-sky-500 p-6 text-white flex items-center gap-4"
            >
              <div class="w-24 h-24 rounded-lg overflow-hidden relative">
                <!-- Skeleton -->
                <div
                  v-if="selectedMember.image && !modalImageLoaded"
                  class="absolute inset-0 bg-white/20 animate-pulse rounded-lg flex items-center justify-center"
                >
                  <Icon name="group" size="32" class="text-white/50" />
                </div>
                <!-- 實際圖片 -->
                <img
                  v-if="selectedMember.image"
                  :src="selectedMember.image"
                  :alt="selectedMember.name"
                  loading="lazy"
                  class="w-24 h-24 rounded-lg object-contain transition-opacity duration-500"
                  :class="modalImageLoaded ? 'opacity-100' : 'opacity-0'"
                  @load="modalImageLoaded = true"
                />
                <span
                  v-else
                  class="text-5xl font-light flex items-center justify-center w-full h-full"
                  >{{ selectedMember.name.charAt(0) }}</span
                >
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold mb-1">{{ selectedMember.name }}</h3>
                <p class="text-sky-100">{{ selectedMember.title }}</p>
                <p v-if="selectedMember.subtitle" class="text-sm text-sky-200 mt-1">
                  {{ selectedMember.subtitle }}
                </p>
              </div>
              <button
                @click="closeModal"
                class="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <Icon name="close" size="24" />
              </button>
            </div>

            <!-- Modal Body -->
            <div class="p-6 overflow-y-auto max-h-[calc(90vh-210px)]">
              <!-- Description -->
              <p
                v-if="selectedMember.description"
                class="text-gray-700 mb-6 leading-relaxed text-lg"
              >
                {{ selectedMember.description }}
              </p>

              <!-- Experience -->
              <div v-if="selectedMember.experience" class="mb-6">
                <h4 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div class="w-1 h-6 bg-sky-600 rounded-full" />
                  Experience
                </h4>
                <ul class="space-y-2 pl-3">
                  <li
                    v-for="(exp, idx) in selectedMember.experience"
                    :key="idx"
                    class="flex items-start space-x-3"
                  >
                    <div class="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                    <span class="text-gray-700">{{ exp }}</span>
                  </li>
                </ul>
              </div>

              <!-- Certifications & Training -->
              <div v-if="selectedMember.certifications" class="mb-6">
                <h4 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div class="w-1 h-6 bg-sky-600 rounded-full" />
                  Certifications & Training
                </h4>
                <ul class="space-y-2 pl-3">
                  <li
                    v-for="(cert, idx) in selectedMember.certifications"
                    :key="idx"
                    class="flex items-start space-x-3"
                  >
                    <div class="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                    <span class="text-gray-700">{{ cert }}</span>
                  </li>
                </ul>
              </div>

              <!-- Skills & Expertise -->
              <div v-if="selectedMember.skills" class="mb-6">
                <h4 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div class="w-1 h-6 bg-sky-600 rounded-full" />
                  Skills & Expertise
                </h4>
                <div class="flex flex-wrap gap-2 pl-3">
                  <span
                    v-for="(skill, idx) in selectedMember.skills"
                    :key="idx"
                    class="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>

              <!-- China Work Experience -->
              <div v-if="selectedMember.chinaExperience" class="mb-6">
                <h4 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div class="w-1 h-6 bg-sky-600 rounded-full" />
                  China Work Experience
                </h4>
                <ul class="space-y-2 pl-3">
                  <li
                    v-for="(exp, idx) in selectedMember.chinaExperience"
                    :key="idx"
                    class="flex items-start space-x-3"
                  >
                    <div class="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                    <span class="text-gray-700">{{ exp }}</span>
                  </li>
                </ul>
              </div>

              <!-- UK Work Experience -->
              <div v-if="selectedMember.ukExperience" class="mb-6">
                <h4 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div class="w-1 h-6 bg-sky-600 rounded-full" />
                  UK Work Experience
                </h4>
                <ul class="space-y-2 pl-3">
                  <li
                    v-for="(exp, idx) in selectedMember.ukExperience"
                    :key="idx"
                    class="flex items-start space-x-3"
                  >
                    <div class="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                    <span class="text-gray-700">{{ exp }}</span>
                  </li>
                </ul>
              </div>

              <!-- Education -->
              <div v-if="selectedMember.education" class="mb-6">
                <h4 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div class="w-1 h-6 bg-sky-600 rounded-full" />
                  Education
                </h4>
                <ul class="space-y-2 pl-3">
                  <li
                    v-for="(edu, idx) in selectedMember.education"
                    :key="idx"
                    class="flex items-start space-x-3"
                  >
                    <div class="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0" />
                    <span class="text-gray-700">{{ edu }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Modal Footer -->
            <div
              class="h-[70px] border-t border-gray-100 p-4 flex justify-end sticky bottom-0 bg-white"
            >
              <button
                @click="closeModal"
                class="px-6 py-2 bg-sky-100 hover:bg-sky-200 text-sky-700 rounded-lg transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </DefaultLayout>
</template>

<style scoped>
/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95) translateY(20px);
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: all 0.3s ease;
}
</style>
