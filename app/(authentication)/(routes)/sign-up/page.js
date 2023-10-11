"use client";

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
    Typography,
} from "@material-tailwind/react";
import Link from "next/link";

const SignUp = () => {
    return (
        <section className="flex justify-center py-20">
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="brown"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign Up
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Name" size="lg" color="brown" />
                    <Input label="Email" size="lg" color="brown" />
                    <Input label="Password" size="lg" color="brown" />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth color="brown">
                        Sign Up
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Already have an account?
                        <Link href="/sign-in" className="ml-1 font-bold text-brown-500">
                            Sign In
                        </Link>
                    </Typography>
                </CardFooter>
            </Card>
        </section>
    );
};

export default SignUp;
