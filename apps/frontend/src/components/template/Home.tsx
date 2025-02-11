"use client";

import {
	Card,
	CardContent,
	Typography,
	Box,
	CircularProgress,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

// query
import { useGetUserQuery } from "@/store/userSlice";

const Home = () => {
	// type of data just only Email, username, id
	const { data, isLoading } = useGetUserQuery({});

	return (
		<Grid
			container
			spacing={2}
		>
			{isLoading ? (
				<CircularProgress
					color="secondary"
					sx={{ position: "absolute", top: "50%", left: "50%" }}
				/>
			) : (
				data?.data.map(
					(
						user: { id: string; email: string; username: string },
						index: number
					) => (
						<Grid
							key={index}
							size={{ xs: 12, md: 4, lg: 3 }}
						>
							<Box
								sx={{
									maxWidth: { xs: "100%", md: 275, lg: "100%" },
									maxHeight: 180,
								}}
							>
								<Card variant="outlined">
									<CardContent>
										<Typography
											gutterBottom
											sx={{ color: "text.secondary", fontSize: 14 }}
										>
											{user?.id}
										</Typography>
										<Typography
											variant="h5"
											component="div"
										>
											{user?.username}
										</Typography>
										<Typography sx={{ color: "text.secondary", mb: 1.5 }}>
											adjective
										</Typography>
										<Typography variant="body2">
											{user.email}.
											<br />
											{'"a benevolent smile"'}
										</Typography>
									</CardContent>
								</Card>
							</Box>
						</Grid>
					)
				)
			)}
		</Grid>
	);
};

export default Home;
