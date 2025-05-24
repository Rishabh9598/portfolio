"use client";
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DataPoint {
  hours: number;
  score: number;
  student: string;
}

const DataVisualization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Sample data
    const data: DataPoint[] = [
      { hours: 2, score: 65, student: 'Student 1' },
      { hours: 3, score: 70, student: 'Student 2' },
      { hours: 4, score: 75, student: 'Student 3' },
      { hours: 5, score: 80, student: 'Student 4' },
      { hours: 6, score: 85, student: 'Student 5' },
      { hours: 7, score: 90, student: 'Student 6' },
      { hours: 8, score: 95, student: 'Student 7' },
    ];

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll('*').remove();

    // Set up dimensions
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create scales
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.hours) || 0])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.score) || 0])
      .range([height, 0]);

    // Add axes
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale).ticks(5))
      .append('text')
      .attr('x', width / 2)
      .attr('y', 35)
      .attr('fill', '#CFAEFF')
      .text('Study Hours');

    svg.append('g')
      .call(d3.axisLeft(yScale).ticks(5))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', -30)
      .attr('fill', '#CFAEFF')
      .text('Exam Score');

    // Add dots
    const dots = svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.hours))
      .attr('cy', d => yScale(d.score))
      .attr('r', 6)
      .attr('fill', '#CFAEFF')
      .attr('opacity', 0.7)
      .on('mouseover', function(event, d) {
        d3.select(this)
          .attr('r', 8)
          .attr('opacity', 1);

        // Show tooltip
        svg.append('text')
          .attr('id', 'tooltip')
          .attr('x', xScale(d.hours) + 10)
          .attr('y', yScale(d.score) - 10)
          .attr('fill', '#CFAEFF')
          .text(`${d.student}: ${d.score}%`);
      })
      .on('mouseout', function() {
        d3.select(this)
          .attr('r', 6)
          .attr('opacity', 0.7);

        // Remove tooltip
        svg.select('#tooltip').remove();
      });

    // Add trend line
    const line = d3.line<DataPoint>()
      .x(d => xScale(d.hours))
      .y(d => yScale(d.score));

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#CFAEFF')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '5,5')
      .attr('d', line);

  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg ref={svgRef} className="w-full h-full"></svg>
    </div>
  );
};

export default DataVisualization; 