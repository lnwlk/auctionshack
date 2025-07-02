"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import MeshBackground from "@/components/MeshBackground";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation("legals");

  // Helper: Render a list safely from the translation JSON
  const renderList = (items: unknown) => {
    if (!Array.isArray(items)) return null;
    return (
      <ul className="mb-4 list-disc pl-5">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  };

  // Render sections dynamically based on keys in JSON
  const sectionKeys = [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
    "section7",
    "section8",
    "section9",
    "section10",
    "section11",
    "section12",
  ];

  return (
    <>
      <MeshBackground />
      <NavBar />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="mb-4 text-3xl font-bold">{t("privacyPolicy.title")}</h1>
        <p className="text-shackBlue mb-6">{t("privacyPolicy.version")}</p>
        <h2 className="mb-2 text-xl font-semibold">
          {t("privacyPolicy.heading")}
        </h2>
        <p className="mb-4">{t("privacyPolicy.content")}</p>
        {sectionKeys.map((key) => {
          const heading = t(`privacyPolicy.${key}.heading`);
          const content = t(`privacyPolicy.${key}.content`);
          const list = t(`privacyPolicy.${key}.list`, { returnObjects: true });
          const list2 = t(`privacyPolicy.${key}.list2`, {
            returnObjects: true,
          });
          console.log(`list for ${key}:`, list);
          if (key === "section2") {
            const directlyTitle = t("privacyPolicy.section2.directly.title");
            const directlyItems = t("privacyPolicy.section2.directly.items", {
              returnObjects: true,
            });
            const indirectlyTitle = t(
              "privacyPolicy.section2.Indirectly.title",
            );
            const indirectlyItems = t(
              "privacyPolicy.section2.Indirectly.items",
              {
                returnObjects: true,
              },
            );
            return (
              // Section 2
              <section key={key} className="mb-16">
                <h3 className="mb-1 text-xl font-semibold">{heading}</h3>
                <p className="mb-2">{content}</p>
                <h4 className="font-semibold">{directlyTitle}</h4>
                {renderList(directlyItems)}
                <h4 className="font-semibold">{indirectlyTitle}</h4>
                {renderList(indirectlyItems)}
              </section>
            );
          }
          if (key === "section3") {
            const contractTitle = t("privacyPolicy.section3.contract.title");
            const contractDesc = t(
              "privacyPolicy.section3.contract.description",
            );
            const contractItems = t("privacyPolicy.section3.contract.items", {
              returnObjects: true,
            });
            const consentTitle = t("privacyPolicy.section3.consent.title");
            const consentDesc = t("privacyPolicy.section3.consent.description");
            const consentItems = t("privacyPolicy.section3.consent.items", {
              returnObjects: true,
            });
            const legitimateTitle = t(
              "privacyPolicy.section3.legitimate.title",
            );
            const legitimateDesc = t(
              "privacyPolicy.section3.legitimate.description",
            );
            const legitimateItems = t(
              "privacyPolicy.section3.legitimate.items",
              {
                returnObjects: true,
              },
            );
            const necessityTitle = t("privacyPolicy.section3.necessity.title");
            const necessityDesc = t(
              "privacyPolicy.section3.necessity.description",
            );
            const necessityItems = t("privacyPolicy.section3.necessity.items", {
              returnObjects: true,
            });
            return (
              // Section 3
              <section key={key} className="mb-6">
                <h3 className="mb-1 text-xl font-semibold">{heading}</h3>
                <p className="mb-2">{content}</p>
                <h4 className="font-semibold">{contractTitle}</h4>
                <p>{contractDesc}</p>
                {renderList(contractItems)}
                <h4 className="font-semibold">{consentTitle}</h4>
                <p>{consentDesc}</p>
                {renderList(consentItems)}
                <h4 className="font-semibold">{legitimateTitle}</h4>
                <p>{legitimateDesc}</p>
                {renderList(legitimateItems)}
                <h4 className="font-semibold">{necessityTitle}</h4>
                <p>{necessityDesc}</p>
                {renderList(necessityItems)}
              </section>
            );
          }
          if (key === "section10") {
            const essentialHeading = t(
              "privacyPolicy.section10.essential.heading",
            );
            const essentialContent = t(
              "privacyPolicy.section10.essential.content",
            );
            const essentialList = t("privacyPolicy.section10.essential.list", {
              returnObjects: true,
            });
            const nonessentialHeading = t(
              "privacyPolicy.section10.nonessential.heading",
            );
            const nonessentialContent = t(
              "privacyPolicy.section10.nonessential.content",
            );
            const googleHeading = t("privacyPolicy.section10.google.heading");
            const googleContent = t("privacyPolicy.section10.google.content");
            const googleList = t("privacyPolicy.section10.google.list", {
              returnObjects: true,
            });
            const googleNote = t("privacyPolicy.section10.google.note");
            return (
              // Section 10
              <section key={key} className="mb-6">
                <h3 className="mb-1 text-lg font-semibold">{heading}</h3>
                <p className="mb-2">{content}</p>
                <h4 className="font-semibold">{essentialHeading}</h4>
                <p>{essentialContent}</p>
                {renderList(essentialList)}
                <h4 className="font-semibold">{nonessentialHeading}</h4>
                <p>{nonessentialContent}</p>
                <h4 className="font-semibold">{googleHeading}</h4>
                <p dangerouslySetInnerHTML={{ __html: googleContent }} />
                {renderList(googleList)}
                <p className="text-sm italic">{googleNote}</p>
              </section>
            );
          }
          if (key === "section12") {
            const details = t("privacyPolicy.section12.details", {
              returnObjects: true,
            });
            return (
              // Section 12
              <section key={key} className="mb-6">
                <h3 className="mb-1 text-lg font-semibold">{heading}</h3>
                <p>{content}</p>
                <address className="mt-2 not-italic">
                  {Array.isArray(details) &&
                    details.map((line, idx) => (
                      <div key={idx}>{String(line)}</div>
                    ))}
                </address>
              </section>
            );
          }
          return (
            // Section 11
            <section key={key} className="mb-6">
              <h3 className="mb-1 text-lg font-semibold">{heading}</h3>
              <p>{content}</p>
              {renderList(list)}
              {renderList(list2)}
            </section>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
