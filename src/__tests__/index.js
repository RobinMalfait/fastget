const get = require("../index");

it("should get the value from an object", () => {
  const obj = {
    a: {
      b: {
        c: "My value"
      }
    }
  };

  const expected = get(() => obj.a.b.c);

  expect(expected).toEqual("My value");
});

it("should get the value from an object, with a default value", () => {
  const obj = {
    a: {
      b: {
        c: "My value"
      }
    }
  };

  const expected = get(() => obj.a.b.c, "defaultValue");

  expect(expected).toEqual("My value");
});

it("should get the defaultValue if the path does not exist", () => {
  const obj = {
    a: {
      b: {
        c: "My value"
      }
    }
  };

  const expected = get(() => obj.c.a.b, "defaultValue");

  expect(expected).toEqual("defaultValue");
});

it("should get the value from an array", () => {
  const arr = [1, 2, 3, 5, 8, 13, 21];

  const expected = get(() => arr[5]);

  expect(expected).toEqual(13);
});

it("should get the defaultValue if the index does not exist", () => {
  const arr = [1, 2, 3, 5, 8, 13, 21];

  const expected = get(() => arr[40], 'defaultValue');

  expect(expected).toEqual('defaultValue');
});
