<script setup>
import { ref } from "vue";
import DefaultLayout from "@/layouts/default.vue";
import Icon from "@/components/base/Icon.vue";

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
  },
  {
    name: "Victor Zhang",
    title: "General Manager of Market Capitalization Management",
    subtitle: "Certified Financial Risk Manager (FRM)",
    imagePlaceholder: true,
    description:
      "He holds a Bachelor's in German Studies from Beijing Foreign Studies University and a Master's in Financial Engineering from the University of Bonn, With international experience in Germany, Switzerland, China and the U.S.",
  },
];
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section
      class="relative py-20 bg-gradient-to-br from-sky-900 via-cyan-800 to-sky-900 text-white"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-5xl md:text-6xl mb-6">Our Expert Team</h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            Decades of combined experience in international business, finance, engineering, and
            development
          </p>
        </div>
      </div>
    </section>

    <!-- Team Members -->
    <section class="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-16">
          <div v-for="(member, index) in teamMembers" :key="index">
            <div
              class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div
                  class="lg:col-span-1 bg-gradient-to-br from-sky-600 to-cyan-600 p-8 text-white"
                >
                  <div class="flex flex-col items-center text-center">
                    <span class="text-6xl">{{ member.name.charAt(0) }}</span>
                    <h3 class="text-2xl mb-2">{{ member.name }}</h3>
                    <p class="text-blue-100 mb-2">{{ member.title }}</p>
                    <p v-if="member.subtitle" class="text-sm text-blue-200">
                      {{ member.subtitle }}
                    </p>
                    <div class="flex gap-4 mt-6">
                      <button
                        class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Icon name="mail" size="20" class="w-5 h-5" />
                      </button>
                      <button
                        class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Icon name="linkedin" size="20" class="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div class="lg:col-span-2 p-8">
                  <p v-if="member.description" class="text-gray-700 mb-6 leading-relaxed">
                    {{ member.description }}
                  </p>

                  <div v-if="member.education" class="mb-6">
                    <h4 class="text-xl text-gray-900 mb-3">Education</h4>
                    <ul class="space-y-2">
                      <li
                        v-for="(edu, idx) in member.education"
                        :key="idx"
                        class="flex items-start space-x-3"
                      >
                        <div class="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                        <span class="text-gray-700">{{ edu }}</span>
                      </li>
                    </ul>
                  </div>

                  <div v-if="member.experience" class="mb-6">
                    <h4 class="text-xl text-gray-900 mb-3">Experience</h4>
                    <ul class="space-y-2">
                      <li
                        v-for="(exp, idx) in member.experience"
                        :key="idx"
                        class="flex items-start space-x-3"
                      >
                        <div class="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                        <span class="text-gray-700">{{ exp }}</span>
                      </li>
                    </ul>
                  </div>

                  <div v-if="member.certifications" class="mb-6">
                    <h4 class="text-xl text-gray-900 mb-3">Certifications & Training</h4>
                    <ul class="space-y-2">
                      <li
                        v-for="(cert, idx) in member.certifications"
                        :key="idx"
                        class="flex items-start space-x-3"
                      >
                        <div class="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <span class="text-gray-700">{{ cert }}</span>
                      </li>
                    </ul>
                  </div>

                  <div v-if="member.skills" class="mb-6">
                    <h4 class="text-xl text-gray-900 mb-3">Skills & Expertise</h4>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="(skill, idx) in member.skills"
                        :key="idx"
                        class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {{ skill }}
                      </span>
                    </div>
                  </div>

                  <div v-if="member.chinaExperience" class="mb-6">
                    <h4 class="text-xl text-gray-900 mb-3">China Work Experience</h4>
                    <ul class="space-y-2">
                      <li
                        v-for="(exp, idx) in member.chinaExperience"
                        :key="idx"
                        class="flex items-start space-x-3"
                      >
                        <div class="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                        <span class="text-gray-700">{{ exp }}</span>
                      </li>
                    </ul>
                  </div>

                  <div v-if="member.ukExperience" class="mb-6">
                    <h4 class="text-xl text-gray-900 mb-3">UK Work Experience</h4>
                    <ul class="space-y-2">
                      <li
                        v-for="(exp, idx) in member.ukExperience"
                        :key="idx"
                        class="flex items-start space-x-3"
                      >
                        <div class="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                        <span class="text-gray-700">{{ exp }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-sky-900 to-cyan-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <h2 class="text-4xl mb-6">Work With Our Expert Team</h2>
          <p class="text-xl text-blue-100 mb-8">
            Let our experienced professionals guide your investment journey in Texas
          </p>
          <a
            href="/contact"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-600 to-amber-500 text-white rounded-lg hover:from-sky-700 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/20"
          >
            Contact Our Team
            <Icon name="arrow_forward" size="20" class="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
