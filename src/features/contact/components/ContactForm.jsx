import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { AiOutlinePhone } from "react-icons/ai";
import { MdDriveFileRenameOutline, MdOutlineEmail } from "react-icons/md";
import Input from "./Input";
import TextArea from "./TextArea";
import GridContainer from "@/ui/GridContainer";
import Button from "@/ui/Button";

const initialState = {
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
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: "onSubmit",
    defaultValues: initialState,
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
      className="flex flex-col gap-6"
    >
      <GridContainer styles="sm:grid! sm:grid-cols-2!">
        <Controller
          name="user_name"
          control={control}
          rules={{
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
          }}
          render={({ field }) => (
            <Input
              field={field}
              placeholder="First Name"
              Icon={<MdDriveFileRenameOutline />}
              disabled={isLoading}
              error={errors?.user_name?.message}
            />
          )}
        />

        <Controller
          name="user_last_name"
          control={control}
          rules={{
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
          }}
          render={({ field }) => (
            <Input
              field={field}
              placeholder="Last Name"
              Icon={<MdDriveFileRenameOutline />}
              disabled={isLoading}
              error={errors?.user_last_name?.message}
            />
          )}
        />
      </GridContainer>

      <Controller
        name="user_email"
        control={control}
        rules={{
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Enter a valid email.",
          },
        }}
        render={({ field }) => (
          <Input
            field={field}
            placeholder="Email"
            Icon={<MdOutlineEmail />}
            disabled={isLoading}
            error={errors?.user_email?.message}
          />
        )}
      />

      <Controller
        name="user_phone"
        control={control}
        rules={{
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
          pattern: {
            value: /^(\+?\d{1,3})? ?\d{10,15}$/,
            message: "Enter a valid mobile phone number.",
          },
        }}
        render={({ field }) => (
          <Input
            field={field}
            placeholder="Phone"
            disabled={isLoading}
            Icon={<AiOutlinePhone />}
            error={errors?.user_phone?.message}
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        rules={{
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
        }}
        render={({ field }) => (
          <TextArea
            field={field}
            placeholder="Message"
            disabled={isLoading}
            error={errors?.message?.message}
          />
        )}
      />

      <Button
        variation="secondary"
        type="submit"
        AriaLabel="Submit Form"
        loading={isLoading}
      >
        <span>Submit</span>
      </Button>
    </form>
  );
}
