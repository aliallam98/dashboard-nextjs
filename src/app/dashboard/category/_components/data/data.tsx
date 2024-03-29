import {
    ArrowDown ,
    ArrowRight ,
    ArrowUp,
    CheckCircle ,
    Circle ,
    CircleOff,
    HelpCircle ,
    TimerOff ,
    CircleDashed 
  } from "lucide-react"
  
  export const labels = [
    {
      value: "bug",
      label: "Bug",
    },
    {
      value: "feature",
      label: "Feature",
    },
    {
      value: "documentation",
      label: "Documentation",
    },
  ]
  
  export const statuses = [
    {
      value: "backlog",
      label: "Backlog",
      icon: HelpCircle ,
    },
    {
      value: "todo",
      label: "Todo",
      icon: Circle ,
    },
    {
      value: "in progress",
      label: "In Progress",
      icon: TimerOff ,
    },
    {
      value: "done",
      label: "Done",
      icon: CheckCircle ,
    },
    {
      value: "canceled",
      label: "Canceled",
      icon: CircleOff,
    },
    {
      value: "pending",
      label: "Pending",
      icon: CircleDashed ,
    },
  ]
  
  export const priorities = [
    {
      label: "Low",
      value: "low",
      icon: ArrowDown ,
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowRight ,
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUp,
    },
  ]