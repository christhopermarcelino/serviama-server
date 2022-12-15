const {
  GallonOrder,
  getAllGallonOrders,
  getGallonOrderById,
} = require("../model/GallonOrderModel");

const {
  GALLONORDER_STATUS_ENUM,
} = require("../schema/typedef/GallonOrderType");

describe("GallonOrder Testing", () => {
  test("creating new gallonorder", async () => {
    const gallonOrder = new GallonOrder({
      gallonId: "6383906bb6f4e2e4edeae0e6",
      userId: "639a874748876f9cba905a01",
      status: GALLONORDER_STATUS_ENUM.WAITING,
    });

    const newGallonOrder = await gallonOrder.createGallonOrder();

    expect(newGallonOrder).toEqual(await getGallonOrderById(newGallonOrder.id));
  });

  test("get all GallonOrders", async () => {
    const gallonOrders = await getAllGallonOrders();

    expect(gallonOrders).toBeDefined();
  });

  test("get GallonOrder by id", async () => {
    const gallonOrder = await getGallonOrderById("638391cdb10bb50e33266cb2");

    expect(gallonOrder).toEqual(
      expect.objectContaining({
        gallonId: expect.any(String),
        userId: expect.any(String),
        status: expect.any(Number),
      })
    );
  });
});
