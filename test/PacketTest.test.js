const {
  Packet,
  getAllPackets,
  getPacketById,
  getPacketsByUserId,
} = require("../model/PacketModel");
const { PACKET_STATUS_ENUM } = require("../schema/typedef/PacketType");

describe("Packet Testing", () => {
  test("creating new packet", async () => {
    const packet = new Packet({
      title: "New packet 1",
      description: "testing packet",
      status: PACKET_STATUS_ENUM.ARRIVED,
      sender: "639a7fa84e20e3a74f2a88d2",
    });

    const newpacket = await packet.createpacket();

    expect(newpacket).toEqual(await getPacketById(newpacket.id));
  });

  test("get all packets", async () => {
    const packets = await getAllPackets();

    expect(packets).toBeDefined();
  });

  test("get packet by id", async () => {
    const packet = await getPacketById("639a88893a078b8c11a628bc");

    expect(packet).toEqual(
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
