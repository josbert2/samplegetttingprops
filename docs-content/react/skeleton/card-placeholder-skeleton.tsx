import { Button, Typography } from "@material-tailwind/react";
import Card, {
  CardBody,
  CardFooter,
  CardHeader,
} from "../../../packages/material-tailwind-react/src/components/Card";

export function CardPlacehoderSkeleton() {
  return (
    <Card className="mt-6 w-96 animate-pulse">
      <CardHeader
        shadow={false}
        floated={false}
        className="relative grid h-56 bg-gray-300 place-items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </CardHeader>
      <CardBody>
        <Typography
          as="div"
          variant="h1"
          className="w-56 h-3 mb-4 bg-gray-300 rounded-full"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="w-full h-2 mb-2 bg-gray-300 rounded-full"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="w-full h-2 mb-2 bg-gray-300 rounded-full"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="w-full h-2 mb-2 bg-gray-300 rounded-full"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="w-full h-2 mb-2 bg-gray-300 rounded-full"
        >
          &nbsp;
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          disabled
          tabIndex={-1}
          className="w-20 h-8 bg-gray-300 shadow-none hover:shadow-none"
        >
          &nbsp;
        </Button>
      </CardFooter>
    </Card>
  );
}
