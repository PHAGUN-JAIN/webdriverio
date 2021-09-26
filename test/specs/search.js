describe("Ebay Product Search", () => {
  it("should open the main url and verify the title", async () => {
    browser.url("https://www.ebay.com/");
    await expect(browser).toHaveTitle(
      "Electronics, Cars, Fashion, Collectibles & More | eBay"
    );
  });

  it("should search and verify result", () => {
    const searchInput = $("#gh-ac");
    const submitBtn = $("gh-btn");

    searchInput.addValue("Laptop");
    submitBtn.click();

    expect(searchInput).toHaveValue("Laptop");
  });

  it("should redirect to new page and verify the title", () => {
    expect(browser).toHaveTitle("laptop | eBay");
  });

  it("should search for product and verify the category", () => {
    const category = $("#gh-cat option:nth-child(1)");

    expect(category).toHaveText("PC Laptops & Netbooks");
  });
});
