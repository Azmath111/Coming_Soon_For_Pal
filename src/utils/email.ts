interface NotificationData {
  name: string;
  email: string;
  interests: string;
}

export async function sendNotificationEmail(data: NotificationData): Promise<void> {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      access_key: '9687ae68-9716-4d03-9c4c-f3a6ec40f888',
      subject: 'New Launch Notification Request',
      from_name: data.name,
      from_email: data.email,
      to_email: 'deepak.azmath@gmail.com',
      message: `
Name: ${data.name}
Email: ${data.email}
Interests: ${data.interests}

This person would like to be notified about your project.
      `.trim()
    })
  });

  const result = await response.json();
  
  if (!response.ok || result.success !== true) {
    throw new Error(result.message || 'Failed to send email');
  }
}