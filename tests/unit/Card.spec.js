import Card from "@/components/Card.vue";
import { mount } from "@vue/test-utils";

describe("Card.vue", () => {
  it("renders slots when passed", () => {
    const content = "<span>Content</span>";
    const title = "<span>Title</span>";

    const wrapper = mount(Card, {
      slots: {
        default: content,
        title: title,
      },
    });

    expect(wrapper.html()).toMatch(title);
    expect(wrapper.html()).toMatch(content);
  });
});
