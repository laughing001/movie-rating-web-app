'use client';
import { Box, Input } from '@chakra-ui/react';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../utils/fetchMovies';
import { setMovies,clearMovies, setKey, setPageNo } from '../store/movieSlice';
import { MovieState } from '../types';

export default function SearchBar() {
  const dispatch = useDispatch();
  const key = useSelector((state: {movies: MovieState}) => state.movies.key);
  const handleSearch = debounce(async (value: string) => {
    const movies: any = await fetchMovies(1, 20, value);
    dispatch(setKey(value || ''));
    dispatch(setPageNo(1));
    dispatch(clearMovies());
    dispatch(setMovies(movies));
  }, 300);
  return (
    <Box mb={8} mt={8} style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Input
        style={{
          width: '50%',
        }}
        defaultValue={key}
        border="1px solid #E2E8F0"
        placeholder="Search for movies..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Box>
  );
}
