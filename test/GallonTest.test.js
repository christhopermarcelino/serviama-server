const {
  Gallon,
  getAllGallons,
  getGallonById,
} = require("../model/GallonModel");

describe("gallon Testing", () => {
  test("creating new gallon", async () => {
    const gallon = new Gallon({
      brand: "ITS Mine",
      stock: 100,
    });

    const newGallon = await gallon.createGallon();

    expect(newGallon).toEqual(await getGallonById(newGallon.id));
  });

  test("get all gallons", async () => {
    const gallons = await getAllGallons();

    expect(gallons).toBeDefined();
  });

  test("get gallon by id", async () => {
    const gallon = await getGallonById("6383906bb6f4e2e4edeae0e6");

    expect(gallon).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        brand: expect.any(String),
        stock: expect.any(Number),
      })
    );
  });
});
