import { MdOutlineEmail, MdOutlineVpnKey } from "react-icons/md";
import GridContainer from "@/ui/GridContainer";

const cardStyle = "flex items-center gap-2 rounded-md bg-secondary p-[8px]";
const iconStyle = "text-3xl text-orange mb-auto";

export default function DescriptionAndToolkit({
  description,
  accounts,
  toolkit,
}) {
  return (
    <div className="space-y-5 lg:basis-[60%]">
      {/* DESCRIPTION */}
      <p className="text-center text-lg lg:text-start">{description}</p>
      {/* ACCOUNTS */}

      {accounts && (
        <div>
          <h2 className="mb-2 text-center font-merienda text-lg font-black text-primary underline">
            Accounts
          </h2>
          <GridContainer
            styles={`${accounts.length > 1 ? "lg:grid-cols-2 lg:grid" : ""}`}
          >
            {accounts.map((account, index) => (
              <div
                key={index}
                className="space-y-1 rounded-md bg-secondary/50 p-3"
              >
                <div className={`${cardStyle}`}>
                  <MdOutlineEmail className={`${iconStyle}`} />
                  <div className="flex gap-1">
                    <p className="font-black">Email: </p>
                    <span className="break-all">{account.email}</span>
                  </div>
                </div>
                <div key={index} className={`${cardStyle}`}>
                  <MdOutlineVpnKey className={`${iconStyle}`} />
                  <div className="flex gap-1">
                    <p className="font-black">Password: </p>
                    <span className="break-all">{account.password}</span>
                  </div>
                </div>
              </div>
            ))}
          </GridContainer>
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
