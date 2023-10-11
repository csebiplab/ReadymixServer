"use client";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Checkbox,
    Input,
    Typography,
} from "@material-tailwind/react";
import Link from "next/link";

const SignIn = () => {
    return (
        <section className="flex justify-center py-20">
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="brown"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Email" size="lg" color="brown" />
                    <Input label="Password" size="lg" color="brown" />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth color="brown">
                        Sign In
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don&apos;t have an account?
                        <Link href="/sign-up" className="ml-1 font-bold text-brown-500">
                            Sign up
                        </Link>
                    </Typography>
                </CardFooter>
            </Card>
        </section>
    );
};

export default SignIn;
