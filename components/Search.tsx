import { SearchBar } from "@rneui/themed";
import { ThemeContext } from "@/constants/ThemeContext";
import { useContext, useState } from "react";
import { dummyMessages } from "@/constants/dummyMessages";

interface Props {
  searchValue: string;
}

export default function Search({ searchValue }: Props) {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const [search, setSearch] = useState<string>(searchValue);
  const [data, setData] = useState(dummyMessages);

  const updateSearch = (search: string) => {
    setSearch(search);
    handleSearch(search);
  };

  const handleSearch = (search: string) => {
    const filteredData = data.filter((item) => item.sender.includes(search));
    setData(filteredData);
  };

  return (
    <SearchBar
      accessible={true}
      accessibilityLabel="Searchbar"
      containerStyle={{
        backgroundColor: colors.primary,
        borderBottomColor: "transparent",
        borderTopColor: "transparent",
      }}
      inputContainerStyle={{
        backgroundColor: colors.inputs,
      }}
      searchIcon={{
        size: 26,
        color: colors.textSecondary,
      }}
      inputStyle={{
        fontSize: 16,
        color: colors.textSecondary,
      }}
      placeholderTextColor={colors.textSecondary}
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
    />
  );
}
