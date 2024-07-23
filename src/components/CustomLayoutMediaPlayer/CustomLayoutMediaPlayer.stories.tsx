import type { Meta, StoryObj } from "@storybook/react";

import CustomLayoutMediaPlayer from "./CustomLayoutMediaPlayer";

const meta = {
  title: "Studio Player/CustomLayoutMediaPlayer",
  component: CustomLayoutMediaPlayer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CustomLayoutMediaPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const File: Story = {
  args: {
    title: "Sprite Fight",
    src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    isOverlayShown: false,
    showCaptions: false,
    showMarkers: false,
  },
};

export const Dash: Story = {
  args: {
    title: "Big Buck Bunny",
    src: "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd",
    isOverlayShown: false,
    showCaptions: false,
  },
};

export const Youtube: Story = {
  args: {
    title: "Oppenheimer",
    src: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    isOverlayShown: false,
    showCaptions: false,
  },
};

export const Vimeo: Story = {
  args: {
    title: "THIS IS WHY WE USE HUBSPOT",
    src: "https://vimeo.com/981664125",
    isOverlayShown: false,
    showCaptions: false,
  },
};
