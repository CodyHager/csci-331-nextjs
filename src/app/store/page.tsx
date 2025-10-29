"use client";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "./types";
import ItemCard from "./components/ItemCard";

export default function Store() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response.status !== 200) {
      console.error("unexpected status from API: ", response);
    } else {
      setProducts(response.data);
    }
  };

  const filterProducts = (): Product[] => {
    const filteredProducts = products.filter((p) =>
      p.title.toLowerCase().includes(searchTerm),
    );
    return filteredProducts;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchProducts = async () => {
      await handleFetchProducts();
    };
    fetchProducts();
  }, []);

  return (
    <Stack display="flex" alignItems="center" sx={{ m: 5 }}>
      <Typography variant="h2" gutterBottom>
        Fake Store
      </Typography>
      <TextField
        label="Search for a product"
        variant="outlined"
        sx={{ width: "30%", mb: 3 }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleSearchChange(event)
        }
        value={searchTerm}
      ></TextField>
      <Grid container spacing={2}>
        {filterProducts().map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <ItemCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Box height={50}></Box>
    </Stack>
  );
}
