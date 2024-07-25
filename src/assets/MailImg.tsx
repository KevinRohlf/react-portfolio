function MailImg({color}: {color: string}) {
  return (
    <svg className="[&>path]:hover:fill-cyan-600 transition-colors"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 0C8.93333 0 0 8.93333 0 20C0 31.0667 8.93333 40 20 40C31.0667 40 40 31.0667 40 20C40 8.93333 31.0667 0 20 0ZM32 27.4667C32 28.1333 31.4667 28.6667 30.8 28.6667H9.33333C8.53333 28.6667 8 28 8 27.3333V14.4L20 20.6667L32 14.4V27.4667ZM32 12.9333L20 19.2L8 12.9333V12.6667C8 12 8.53333 11.3333 9.33333 11.3333H30.6667C31.4667 11.3333 32 12 32 12.6667V12.9333Z"
        fill={color}
      />
    </svg>
  );
}

export default MailImg;
