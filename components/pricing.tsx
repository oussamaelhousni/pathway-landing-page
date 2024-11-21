import Image from "next/image";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

function Pricing() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <h2 className="tag">Boost your productivity</h2>
          </div>
          <p className="title">A more effective way to track progress</p>
        </div>

        <div className="flex flex-col gap-8 items-center lg:flex-row lg:items-end mx-auto">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              features,
              inverse,
            }) => {
              return (
                <div
                  className={twMerge(
                    "p-10 border border-[#fafafa] rounded-3xl shadow-[0_7px_14px_#eaeaea] bg-white text-black flex-1 w-full max-w-xl",
                    inverse && "bg-black text-white border-black/20"
                  )}
                >
                  <div className="flex justify-between">
                    <h3
                      className={twMerge(
                        "text-xl font-bold text-black/50",
                        "text-white/30"
                      )}
                    >
                      {title}
                    </h3>

                    {popular && (
                      <div className="inline-flex text-sm px-4 py-1.5 rounnded-xl border border-white/20 rounded-lg">
                        <span className="bg-clip-text bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#71c2ef,#3bffff,#dd7ddf)] font-medium rounded-xl">
                          Popular
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline gap-[4px] mt-[30px]">
                    <span className="text-4xl font-bold tracking-tighter leading-none">
                      ${monthlyPrice}
                    </span>
                    <span
                      className={twMerge(
                        "tracking-tight text-black/50",
                        inverse && "text-white/30"
                      )}
                    >
                      /month
                    </span>
                  </div>
                  <button
                    className={twMerge(
                      "btn btn-primary w-full mt-[30px]",
                      inverse && "bg-white text-black"
                    )}
                  >
                    {buttonText}
                  </button>
                  <ul className="flex flex-col gap-5 mt-8">
                    {features.map((feature) => {
                      return (
                        <li
                          className="text-sm flex items-center gap-4"
                          key={feature}
                        >
                          <Image
                            src={CheckIcon}
                            className="h-6 w-6"
                            alt="check icon"
                          />
                          <span>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
