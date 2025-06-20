import { defineField, defineType, defineArrayMember } from "sanity";

export const imageSlide = defineType({
  name: "carousel",
  type: "object",
  title: "Carousel",
  fields: [
    {
      name: "slides",
      type: "array",
      title: "Slides",
      of: [{ type: "image" }],
    },
  ],
  preview: {
    select: {
      slides: "slides",
    },
    prepare({ slides }) {
      const firstImage = slides?.[0];
      return {
        title: `Carousel with ${slides?.length || 0} slides`,
        media: firstImage,
      };
    },
  },
});

export const fileAttachment = defineType({
  name: "fileAttachment",
  type: "object",
  title: "File Attachment",
  fields: [
    {
      name: "file",
      type: "file",
      title: "File",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
  ],
  preview: {
    select: {
      title: "description",
      media: "file",
    },
  },
});

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [],
});
