import React from 'react'
import { Section } from 'joey'
import StandardButtons from './StandardButtons/StandardsButtons'
import InverseButtons from './InverseButtons/InverseButtons';
// Specificity issues??
// https://styled-components.com/docs/advanced#issues-with-specificity

export default function Buttons () {
    return (
        <Section title="Buttons">
            <StandardButtons />
            <InverseButtons />
        </Section>
    )
}