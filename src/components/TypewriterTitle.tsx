'use client';
import exp from "constants";
import React from "react";
import Typewriter from "typewriter-effect"

type Props = {}

export const TypewriterTitle = (props: Props) => {
    return (
        <Typewriter
            options={{
                loop: true,
            }}
            onInit={(typeWriter) => {
                typeWriter
                    .typeString('Supercharge productivity. 🚀')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Take notes with ease. 📝')
                    .start();
            }}
            />
        );
    };