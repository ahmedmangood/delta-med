"use client";

import { useRef, useState } from "react";
import { CustomButton } from ".";
import { RiSendPlaneFill } from "react-icons/ri";

import emailjs from "@emailjs/browser";

import {
  Alert,
  CustomFlowbiteTheme,
  Label,
  TextInput,
  Textarea,
  Toast,
} from "flowbite-react";
import { HiCheck, HiMail } from "react-icons/hi";
import { FaRegUser, FaUser } from "react-icons/fa";
import { useTranslations } from "next-intl";

function ContactUs() {
  const t = useTranslations("ContactUs");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");

  const [success, setSuccess] = useState<boolean>(false);
  const inputTheme: CustomFlowbiteTheme["textInput"] = {
    field: {
      input: {
        colors: {
          gray: "placeholder-gray-300 focus:border-gray-100 focus:ring-gray-100",
        },
      },
    },
  };
  const textareaTheme: CustomFlowbiteTheme["textarea"] = {
    colors: {
      gray: "resize-none bg-gray-50 border-gray-500 text-gray-900 focus:border-gray-100 focus:ring-gray-100",
    },
  };

  const form = useRef<any>();
  const sendFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrMsg(t("form-err-2"));
      return;
    }

    emailjs
      .sendForm(
        "service_qmpnyd1",
        "template_dir251f",
        form.current,
        "3FqJG_Ro56DWbg4Wt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setErrMsg(""); // Clear any previous error message
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setErrMsg("Failed to send message. Please try again.");
          setSuccess(false);
        }
      );
  };

  return (
    <section
      id="contact-us"
      className="h-screen bg-gradient-to-r from-primary-color to-slate-500 border-t-2 border-white  relative overflow-hidden"
    >
      <div className="pt-10 pb-5">
        <h3
          data-aos="fade-up-right"
          className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-400 text-center text-3xl md:text-6xl font-bold rtl:py-2"
        >
          {t("title")}
        </h3>
        <hr
          style={{
            width: "150px",
            borderTopWidth: "3px",
            textAlign: "center",
            margin: "auto",
          }}
        />
      </div>

      <form
        data-aos="fade-up-left"
        className="w-full h-full"
        ref={form}
        onSubmit={sendFormData}
      >
        <div className="flex flex-col justify-center items-center gap-3 border-2 border-white rounded-xl mx-5 px-2 lg:p-6">
          <h5 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 to-neutral-300 text-center py-6 text-lg md:text-xl">
            {t("form-title")}
          </h5>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label
                  htmlFor="name"
                  value={t("form-name-lable")}
                  className="text-white rtl:text-lg"
                />
              </div>
              <TextInput
                theme={inputTheme}
                id="name"
                type="text"
                name="user_name"
                icon={FaUser}
                rightIcon={FaUser}
                required
                placeholder="name"
                style={{
                  backgroundColor: "transparent !important",
                }}
                className="text-gray-200 placeholder:text-gray-200"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label
                  htmlFor="email4"
                  value={t("form-email-lable")}
                  className="text-white rtl:text-lg"
                />
              </div>
              <TextInput
                theme={inputTheme}
                id="email4"
                type="email"
                name="user_email"
                icon={HiMail}
                rightIcon={HiMail}
                required
                placeholder="name@example.com"
                style={{
                  backgroundColor: "transparent !important",
                }}
                className="text-gray-200"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label
                htmlFor="comment"
                value={t("form-msg-lable")}
                className="text-white rtl:text-lg"
              />
            </div>
            <Textarea
              theme={textareaTheme}
              id="comment"
              name="message"
              placeholder={t("form-msg-placeholder")}
              required
              rows={4}
              cols={100}
              style={{
                backgroundColor: "transparent !important",
              }}
              className="text-gray-200 placeholder-gray-300 "
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>{" "}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <CustomButton
              title={t("form-btn")}
              ourStyle="text-[20px] border-1 border-white hover:bg-white hover:text-gray-700 flex items-center justify-center gap-2"
              icon={<RiSendPlaneFill style={{ fontSize: "20px" }} />}
            />
            {success && (
              <Toast className="text-green-400 bg-transparent border-2 border-green-500">
                <div className="mx-2 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-400 text-green-100 dark:bg-green-800 dark:text-green-200">
                  <HiCheck className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal rtl:text-xl">
                  {t("form-msg")}
                </div>
                <Toast.Toggle className="bg-transparent text-red-400" />
              </Toast>
            )}
            {errMsg && (
              <Alert color="failure">
                <span className="font-medium">{t("form-err")}</span> {errMsg}
              </Alert>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactUs;
