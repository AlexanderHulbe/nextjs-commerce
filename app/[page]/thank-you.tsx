import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="rounded p-4 shadow-lg ring ring-indigo-600/50">
        <div className="flex flex-col items-center space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl font-bold">Thank You !</h1>
          <p className="text-center">
            Thank you for your order! You will recieve a confirmation per email. <br />
            Once the order is shipped out you will reviece another email containing the tracking
            number.
          </p>
          <Link
            href={`/`}
            className="inline-flex items-center rounded rounded-full border border-indigo-600 bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="text-sm font-medium">Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
