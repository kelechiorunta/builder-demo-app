"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Accordion from "./components/Accordion/Accordion";
import MainHeader from "./components/MainHeader/MainHeader";
import SearchBar from "./components/figma-imports-1/HotelBooking/SearchBar";
import HotelBooking from "./components/figma-imports-1/HotelBooking/HotelBooking";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(Accordion, {
  name: "Accordion",
});

Builder.registerComponent(MainHeader, {
  name: "MainHeader",
});

Builder.registerComponent(HotelBooking, {
  name: "HotelBooking"
})

Builder.registerComponent(SearchBar, {
  name: "SearchBar Hotel"
})