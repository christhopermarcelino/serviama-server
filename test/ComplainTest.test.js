const {
  Complain,
  getAllComplains,
  getComplainById,
} = require("../model/ComplainModel");
const { COMPLAIN_STATUS_ENUM } = require("../schema/typedef/ComplainType");

describe("Complain Testing", () => {
  test("creating new complain", async () => {
    const complain = new Complain({
      title: "New complain 1",
      description: "testing complain",
      status: COMPLAIN_STATUS_ENUM.WAITING,
      userId: "639a7fa84e20e3a74f2a88d2",
    });

    const newComplain = await complain.createComplain();

    expect(newComplain).toEqual(await getComplainById(newComplain.id));
  });

  test("get all complains", async () => {
    const complains = await getAllComplains();

    expect(complains).toBeDefined();
  });

  test("get complain by id", async () => {
    const complain = await getComplainById("639a88893a078b8c11a628bc");

    expect(complain).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title: expect.any(String),
        description: expect.any(String),
        status: expect.any(Number),
        userId: expect.any(String),
      })
    );
  });
});
