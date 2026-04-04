import {defineArrayMember, defineField, defineType} from 'sanity'
import {MarkerIcon} from '@sanity/icons'

export const route = defineType({
  name: 'route',
  title: 'Route',
  type: 'document',
  icon: MarkerIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) =>
        Rule.required().custom(async (slug, context) => {
          if (!slug?.current) return true
          const client = context.getClient({apiVersion: '2024-01-01'})
          const id = context.document?._id?.replace(/^drafts\./, '')
          const existing = await client.fetch(
            `count(*[_type == "route" && slug.current == $slug && !(_id in [$id, "drafts." + $id])])`,
            {slug: slug.current, id},
          )
          return existing === 0 || 'Slug is already in use'
        }),
    }),
    defineField({
      name: 'stravaRouteId',
      title: 'Strava Route ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'area',
      title: 'Area',
      type: 'string',
      options: {
        list: [
          {title: 'All', value: 'all'},
          {title: 'San Francisco', value: 'sf'},
          {title: 'North Bay', value: 'north'},
          {title: 'South Bay', value: 'south'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'distance',
      title: 'Distance (miles)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'elevation',
      title: 'Elevation (feet)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
          {title: 'Super Easy', value: 'super easy'},
          {title: 'Easy', value: 'easy'},
          {title: 'Moderate', value: 'moderate'},
          {title: 'Difficult', value: 'difficult'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
      validation: (Rule) => Rule.unique(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'area',
    },
  },
})
