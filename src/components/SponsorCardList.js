import React from "react";
import { SponsorCard } from "./SponsorCard";

export const SponsorCardList = ({ items }) => {
    return items.map(item => (
        <SponsorCard {...item.node.data}  />
    ))
}