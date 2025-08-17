import { FEATURES } from "@/data/landingData";

export default function Features() {
  return (
    <section className="py-16 bg-blue-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
          Why Choose Our AI Solutions
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-4 bg-white border-2 border-gray-900 p-6 rounded-xl hover:bg-gray-100 transition duration-300"
            >
              <div className="flex-shrink-0">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 md:w-14 md:h-14"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-[#9CA3AF]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
