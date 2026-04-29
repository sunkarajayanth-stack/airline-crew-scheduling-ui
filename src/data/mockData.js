export const kpis = [
  { title: 'Total Crew', value: 264, delta: '+4.7%', subtitle: 'vs last month' },
  { title: 'Active Flights', value: 82, delta: '+8.1%', subtitle: 'currently airborne' },
  { title: 'Operational Alerts', value: 11, delta: '-2', subtitle: 'from previous shift' },
  { title: 'Leave Requests', value: 17, delta: '6 pending', subtitle: 'approval queue' }
];

export const utilizationTrend = [
  { day: 'Mon', utilization: 72, dutyHours: 516 },
  { day: 'Tue', utilization: 76, dutyHours: 544 },
  { day: 'Wed', utilization: 81, dutyHours: 569 },
  { day: 'Thu', utilization: 79, dutyHours: 552 },
  { day: 'Fri', utilization: 85, dutyHours: 601 },
  { day: 'Sat', utilization: 68, dutyHours: 474 },
  { day: 'Sun', utilization: 71, dutyHours: 498 }
];

export const crewMembers = [
  { id: 'CR-1024', name: 'Amelia Hart', role: 'Captain', base: 'JFK', status: 'On Duty', hours: 74, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
  { id: 'CR-1168', name: 'Daniel Reyes', role: 'First Officer', base: 'LAX', status: 'Standby', hours: 83, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
  { id: 'CR-1331', name: 'Sofia Malik', role: 'Cabin Lead', base: 'DXB', status: 'On Leave', hours: 57, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
  { id: 'CR-1420', name: 'Noah Kim', role: 'Flight Engineer', base: 'ORD', status: 'On Duty', hours: 92, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' }
];

export const alerts = [
  { id: 1, title: 'Potential rest period breach on JFK-LHR block', severity: 'critical' },
  { id: 2, title: 'Dual assignment overlap detected for CR-1168', severity: 'warning' },
  { id: 3, title: 'Type-rating renewal due within 5 days', severity: 'info' }
];
