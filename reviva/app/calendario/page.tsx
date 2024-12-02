"use client";

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

interface Event {
  date: string;
  description: string;
  category: string;
}

const categories = ["Reciclave", "Organica", "Eletronica"]; // Exemplo de categorias

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [eventDescription, setEventDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [events, setEvents] = useState<Event[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>(categories);

  useEffect(() => {
    const storedEvents = localStorage.getItem("calendarEvents");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  const handleAddEvent = () => {
    if (!selectedDate || !eventDescription) return;

    const newEvent = {
      date: selectedDate.toISOString().split("T")[0],
      description: eventDescription,
      category: selectedCategory,
    };

    setEvents((prev) => [...prev, newEvent]);
    setEventDescription("");
  };

  const getFilteredEvents = () => {
    return events.filter((event) =>
      activeFilters.includes(event.category)
    );
  };

  const toggleFilter = (category: string) => {
    setActiveFilters((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f0f9f0",
        minHeight: "100vh",
        fontFamily: "'Arial', sans-serif",
        color: "#2f4f2f",
      }}
    >
      <h1 style={{ color: "#2e8b57", marginBottom: "20px" }}>Calendário Interativo</h1>

      {/* Filtros por Checkbox */}
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #cce7cc",
          borderRadius: "8px",
          backgroundColor: "#e6f7e6",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Filtrar por Categoria</h2>
        {categories.map((category) => (
          <label
            key={category}
            style={{
              marginRight: "10px",
              fontWeight: "bold",
              color: "#2e8b57",
            }}
          >
            <input
              type="checkbox"
              checked={activeFilters.includes(category)}
              onChange={() => toggleFilter(category)}
              style={{ marginRight: "5px" }}
            />
            {category}
          </label>
        ))}
      </div>

      {/* Calendário Centralizado */}
      <div style={{ marginBottom: "20px" }}>
        <Calendar
          onChange={(date) => setSelectedDate(date as Date)}
          value={selectedDate}
          className="custom-calendar"
        />
      </div>

      {/* Adicionar Evento */}
      {selectedDate && (
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            backgroundColor: "#dff5df",
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #cce7cc",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
          }}
        >
          <h2 style={{ color: "#2e8b57" }}>Adicionar Evento</h2>
          <p style={{ margin: "10px 0", color: "#2f4f2f" }}>
            Data selecionada: {selectedDate.toDateString()}
          </p>
          <input
            type="text"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            placeholder="Descrição do evento"
            style={{
              marginRight: "10px",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #cce7cc",
            }}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              marginRight: "10px",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #cce7cc",
            }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddEvent}
            style={{
              backgroundColor: "#2e8b57",
              color: "white",
              padding: "5px 10px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Adicionar
          </button>
        </div>
      )}

      {/* Lista de Eventos Filtrados */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h2 style={{ color: "#2e8b57" }}>Lista de Eventos</h2>
        {getFilteredEvents().length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {getFilteredEvents().map((event, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #cce7cc",
                  borderRadius: "4px",
                  backgroundColor: "#e6f7e6",
                  color: "#2f4f2f",
                }}
              >
                <strong>{event.date}:</strong> {event.description} (
                {event.category})
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: "#2f4f2f" }}>
            Nenhum evento cadastrado ou correspondente ao filtro.
          </p>
        )}
      </div>
    </div>
  );
}
