import { Box, Skeleton } from '@mui/material';

export const UsersTableSkeleton = () => {
  return (
    <Box sx={{ p: 2 }}>
      {Array.from({ length: 5 }).map((_, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: 'flex',
            gap: 2,
            mb: 2,
          }}
        >
          <Skeleton width={200} height={32} />
          <Skeleton width={260} height={32} />
          <Skeleton width={120} height={32} />
          <Skeleton width={140} height={32} />
          <Skeleton width={200} height={32} />
        </Box>
      ))}
    </Box>
  );
};
