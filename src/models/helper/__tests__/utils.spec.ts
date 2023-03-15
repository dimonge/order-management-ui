import { UTILS } from ".."

describe("UTILS", () => {
  describe("byId", () => {
    it("should convert the list into object by id", () => {
      const list = [{id: 12, name: "test1"}, {id: 34, name: "test2"}]
      expect(UTILS.byId(list)).toEqual({
        12: {id: 12, name: "test1"},
        34: {id: 34, name: "test2"}
      })
    })
  })
})