import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import useGithubApi from '../../hooks/useGithubApi';
import Loading from '../shared/components/Loading';

const RepoSearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: repos, loading, error, searchRepos } = useGithubApi();

  const handleSearch = () => {
    searchRepos(searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for repositories"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      {loading && <Loading />}
      {error && <Text>{error}</Text>}
      <FlatList
        data={repos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.full_name}</Text>
          </View>
        )}
      />
      <Button
        title="Users search"
        onPress={() => navigation.navigate('UserSearch')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default RepoSearchScreen;
