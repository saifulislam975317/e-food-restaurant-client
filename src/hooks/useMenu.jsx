import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data), setLoading(true);
  //     });
  // }, []);
  const {
    data: menu = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/menu");
      const data = await res.json();
      return data;
    },
  });

  return [menu, loading, refetch];
};

export default useMenu;
