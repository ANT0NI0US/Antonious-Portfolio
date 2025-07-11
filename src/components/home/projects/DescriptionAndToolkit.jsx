import { MdOutlineEmail, MdOutlineVpnKey } from "react-icons/md";
import GridContainer from "@/ui/GridContainer";

const cardStyle = "flex items-center gap-2 rounded-md bg-secondary p-[8px]";
const iconStyle = "text-3xl text-primary mb-auto";

export default function DescriptionAndToolkit({
  description,
  accounts,
  toolkit,
  certificate,
}) {
  return (
    <div className="relative flex flex-col gap-5 lg:basis-[60%]">
      {/* DESCRIPTION */}
      <p className="text-center text-lg lg:text-start xl:text-xl xl:leading-9">
        {description}
      </p>

      {/* ACCOUNTS */}
      {accounts && (
        <div>
          <h2 className="font-merienda text-primary mb-2 text-center text-lg font-black underline xl:text-2xl">
            Accounts
          </h2>
          <GridContainer
            styles={`${accounts.length > 1 ? "lg:grid-cols-2 lg:grid" : ""}`}
          >
            {accounts.map(({ email, password }) => (
              <div
                key={email}
                className="bg-secondary/50 space-y-1 rounded-md p-3"
              >
                <div className={`${cardStyle}`}>
                  <MdOutlineEmail className={`${iconStyle}`} />
                  <div className="flex items-center gap-1">
                    <p className="font-black xl:text-lg">Email: </p>
                    <span className="break-all xl:text-lg">{email}</span>
                  </div>
                </div>
                <div className={`${cardStyle}`}>
                  <MdOutlineVpnKey className={`${iconStyle}`} />
                  <div className="flex items-center gap-1">
                    <p className="font-black xl:text-lg">Password: </p>
                    <span className="break-all xl:text-lg">{password}</span>
                  </div>
                </div>
              </div>
            ))}
          </GridContainer>
        </div>
      )}

      {/* CERTIFICATE */}
      {certificate && (
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="font-merienda text-primary text-center text-lg font-black underline xl:text-2xl">
            Certificate
          </h2>
          <img
            src={certificate}
            alt="certificate"
            className="max-h-[400px] rounded-md object-fill"
          />
        </div>
      )}

      {/* TOOLKIT */}
      <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:justify-start">
        {toolkit?.map((el, index) => (
          <img
            loading="lazy"
            title={el.alt}
            key={index}
            src={el.src}
            alt={el.alt}
            className="h-[50px] w-[50px] object-contain object-center"
          />
        ))}
      </div>
    </div>
  );
}
