import { EmailIcon, PhoneIcon, TypeIcon } from "@/icons";
import Button from "@/ui/Button";
import GridContainer from "@/ui/GridContainer";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "./Input";
import TextArea from "./TextArea";

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

const EMAILJS_SERVICE_ID = "service_yijk9v8";
const EMAILJS_TEMPLATE_ID = "template_dolvl3a";
const EMAILJS_PUBLIC_KEY = "5MRR9-mIUN-47nrvy";

const AUTO_DISMISS_MS = 4000;

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [visible, setVisible] = useState(false);
  const formRef = useRef();
  const dismissTimer = useRef(null);

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm({
    mode: "onSubmit",
    defaultValues: initialState,
  });

  useEffect(() => {
    if (!formStatus.message) return;

    setVisible(true);
    clearTimeout(dismissTimer.current);

    dismissTimer.current = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setFormStatus({ type: "", message: "" }), 300);
    }, AUTO_DISMISS_MS);

    return () => clearTimeout(dismissTimer.current);
  }, [formStatus]);

  const sendEmail = () => {
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setFormStatus({
            type: "success",
            message: "Form submitted successfully!",
          });
          reset();
        },
        () => {
          setFormStatus({
            type: "error",
            message: "Something went wrong. Please try again.",
          });
        },
      );
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
              Icon={<TypeIcon />}
              disabled={isSubmitting}
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
              Icon={<TypeIcon />}
              disabled={isSubmitting}
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
            Icon={<EmailIcon />}
            disabled={isSubmitting}
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
            disabled={isSubmitting}
            Icon={<PhoneIcon />}
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
            disabled={isSubmitting}
            error={errors?.message?.message}
          />
        )}
      />

      <div>
        <Button
          type="submit"
          AriaLabel="Submit Form"
          title="Send to Email"
          loading={isSubmitting}
        >
          <span>Submit</span>
        </Button>

        {formStatus.message && (
          <p
            className={`mt-1 text-center text-sm transition-opacity duration-300 ${
              visible ? "opacity-100" : "opacity-0"
            } ${formStatus.type === "success" ? "text-light" : "text-error"}`}
          >
            {formStatus.message}
          </p>
        )}
      </div>
    </form>
  );
}
