import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { AiOutlinePhone } from "react-icons/ai";
import { MdDriveFileRenameOutline, MdOutlineEmail } from "react-icons/md";
import GridContainer from "../../../ui/GridContainer";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "../../../ui/Button";

const intitalState = {
  user_name: "",
  user_last_name: "",
  user_email: "",
  user_phone: "",
  message: "",
};

const isOnlySpaces = (value) => {
  return !value.trim();
};

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: intitalState,
  });

  const sendEmail = () => {
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_yijk9v8",
        "template_dolvl3a",
        formRef.current,
        "5MRR9-mIUN-47nrvy",
      )
      .then(
        () => {
          toast.success("Form submitted successfully!");
          reset();
        },
        (error) => {
          toast.error("An error occurred. Please try again.");
        },
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(sendEmail)}
      className="space-y-3"
    >
      <GridContainer styles="!grid !grid-cols-2">
        <Input
          placeholder="First Name"
          Icon={<MdDriveFileRenameOutline />}
          disabled={isLoading}
          error={errors?.user_name?.message}
          {...register("user_name", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
            minLength: {
              value: 3,
              message: "Enter at least 3 letters",
            },
            maxLength: {
              value: 15,
              message: "You have exceeded the max length (15)",
            },
          })}
        />

        <Input
          placeholder="Last Name"
          Icon={<MdDriveFileRenameOutline />}
          disabled={isLoading}
          error={errors?.user_last_name?.message}
          {...register("user_last_name", {
            required: "This Field is required",
            validate: {
              noOnlySpaces: (value) =>
                !isOnlySpaces(value) || "It Mustn't contains only spaces",
            },
            minLength: {
              value: 3,
              message: "Enter at least 3 letters",
            },
            maxLength: {
              value: 15,
              message: "You have exceeded the max length (15)",
            },
          })}
        />
      </GridContainer>
      <Input
        placeholder="Email"
        Icon={<MdOutlineEmail />}
        disabled={isLoading}
        error={errors?.user_email?.message}
        {...register("user_email", {
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Enter a valid email.",
          },
        })}
      />

      <Input
        placeholder="Phone"
        disabled={isLoading}
        Icon={<AiOutlinePhone />}
        error={errors?.user_phone?.message}
        {...register("user_phone", {
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
        })}
      />

      <TextArea
        placeholder="Message"
        disabled={isLoading}
        error={errors?.message?.message}
        {...register("message", {
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
        })}
      />

      <Button
        variation="secondary"
        type="submit"
        ArialLabel="Submit Form"
        loading={isLoading}
      >
        <span>Submit</span>
      </Button>
    </form>
  );
}
