<template>
  <div class="computemore-project-management-page">
    <!-- Hero -->
    <section class="hero bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-20 px-5 text-center relative">
      <img 
        src="https://via.placeholder.com/1500x500" 
        alt="Project management hero" 
        class="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">ComputeMore Project Management</h1>
        <p class="text-lg md:text-2xl max-w-3xl mx-auto">
          Delivering successful projects through structured planning, execution excellence, and results-driven leadership.
        </p>
        <button class="mt-6 px-6 py-3 bg-white text-purple-700 font-semibold rounded hover:bg-gray-100">
          Schedule a Consultation
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section class="about py-16 px-5 bg-gray-50">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img 
          src="https://via.placeholder.com/600x400" 
          alt="Project planning" 
          class="rounded shadow"
        />

        <div>
          <h2 class="text-3xl font-bold mb-6">End-to-End Project Management</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            ComputeMore provides complete project management solutions designed to guide your technology or business project from concept to completion. Our certified project managers apply global standards and proven methodologies to deliver measurable results.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Whether you’re launching a new software system, upgrading infrastructure, implementing business processes, or managing cross-functional programs — ComputeMore ensures your project is delivered on time, within budget, and with maximum value.
          </p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="services py-16 px-5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Our Project Management Services</h2>

        <div class="grid md:grid-cols-3 gap-10">
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition text-center">
            <img src="https://via.placeholder.com/80" class="mx-auto mb-4" />
            <h3 class="text-xl font-semibold mb-3">Project Planning & Scoping</h3>
            <p class="text-gray-700">
              Define project goals, timelines, budgets, milestones, and resource requirements with precision.
            </p>
          </div>

          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition text-center">
            <img src="https://via.placeholder.com/80" class="mx-auto mb-4" />
            <h3 class="text-xl font-semibold mb-3">Agile & Waterfall Delivery</h3>
            <p class="text-gray-700">
              Implement the right methodology for your project — or hybrid delivery approaches tailored to your team.
            </p>
          </div>

          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition text-center">
            <img src="https://via.placeholder.com/80" class="mx-auto mb-4" />
            <h3 class="text-xl font-semibold mb-3">Risk Management</h3>
            <p class="text-gray-700">
              Identify, assess, and mitigate risks proactively to ensure project stability and success.
            </p>
          </div>

          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition text-center">
            <img src="https://via.placeholder.com/80" class="mx-auto mb-4" />
            <h3 class="text-xl font-semibold mb-3">Team Coordination</h3>
            <p class="text-gray-700">
              Facilitate communication across stakeholders, teams, vendors, and clients to keep workflows aligned.
            </p>
          </div>

          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition text-center">
            <img src="https://via.placeholder.com/80" class="mx-auto mb-4" />
            <h3 class="text-xl font-semibold mb-3">Budget & Resource Tracking</h3>
            <p class="text-gray-700">
              Monitor financials and optimize resource allocation for maximum efficiency and performance.
            </p>
          </div>

          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition text-center">
            <img src="https://via.placeholder.com/80" class="mx-auto mb-4" />
            <h3 class="text-xl font-semibold mb-3">Project Documentation</h3>
            <p class="text-gray-700">
              From requirements to delivery, every key detail is tracked and documented professionally.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section class="tools py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-12">Tools & Methodologies We Use</h2>

        <div class="grid md:grid-cols-4 gap-10">
          <div class="tool-card">
            <img src="https://via.placeholder.com/70" class="mx-auto mb-3" />
            <p class="font-semibold">Jira</p>
          </div>
          <div class="tool-card">
            <img src="https://via.placeholder.com/70" class="mx-auto mb-3" />
            <p class="font-semibold">Trello</p>
          </div>
          <div class="tool-card">
            <img src="https://via.placeholder.com/70" class="mx-auto mb-3" />
            <p class="font-semibold">Zoho Projects</p>
          </div>
          <div class="tool-card">
            <img src="https://via.placeholder.com/70" class="mx-auto mb-3" />
            <p class="font-semibold">Microsoft Project</p>
          </div>
        </div>

        <p class="text-gray-600 mt-6">
          Our team adapts to your preferred tools or helps you adopt industry best practices.
        </p>
      </div>
    </section>

    <!-- Why Choose ComputeMore -->
    <section class="why-us py-16 px-5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose ComputeMore?</h2>

        <div class="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <img src="https://via.placeholder.com/60" class="mx-auto mb-3" />
            <h3 class="text-xl font-semibold mb-3">Certified Project Managers</h3>
            <p class="text-gray-700">
              PMP, Agile, and Scrum-certified experts guiding every project phase.
            </p>
          </div>

          <div>
            <img src="https://via.placeholder.com/60" class="mx-auto mb-3" />
            <h3 class="text-xl font-semibold mb-3">Proven Delivery Success</h3>
            <p class="text-gray-700">
              Our team has delivered complex systems and organization-wide programs reliably.
            </p>
          </div>

          <div>
            <img src="https://via.placeholder.com/60" class="mx-auto mb-3" />
            <h3 class="text-xl font-semibold mb-3">Transparent Reporting</h3>
            <p class="text-gray-700">
              Weekly updates, dashboards, and full visibility for your leadership team.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta bg-indigo-700 text-white py-20 px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Let Us Manage Your Next Project</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Partner with ComputeMore for structured, efficient, and successful project delivery.
      </p>
      <button class="px-6 py-3 bg-white text-indigo-700 font-semibold rounded hover:bg-gray-100">
        Get Started Today
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ComputeMoreProjectManagementPage",
};
</script>

<style scoped>
.computemore-project-management-page {
  font-family: "Inter", sans-serif;
}
.service-card,
.tool-card {
  background-color: #ffffff;
}
</style>
