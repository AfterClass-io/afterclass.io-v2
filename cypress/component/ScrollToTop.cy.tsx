import { ScrollToTop } from "@/common/components/ScrollToTop/ScrollToTop";

describe("<ScrollToTop/>", () => {
  it("should not render when at the top of the page", () => {
    cy.mount(<ScrollToTop />);
    cy.get("[id=ScrollToTop]").should("not.be.visible");
  });

  it("should be visible when not at the top of the page", () => {
    cy.mount(<ScrollToTop />);
    cy.get("[id=ScrollToTop]").should("be.visible");
  });
});
