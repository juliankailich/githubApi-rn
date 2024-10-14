import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import useGithubApi from '../../hooks/useGithubApi';
import Loading from '../shared/components/Loading';

const UserSearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: users, loading, error, searchUsers } = useGithubApi();

  const handleSearch = () => {
    searchUsers(searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for users"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      {loading && <Loading />}
      {error && <Text>{error}</Text>}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.login}</Text>
          </View>
        )}
      />
      <Button
        title="Repositories search"
        onPress={() => navigation.navigate('RepoSearch')}
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

export default UserSearchScreen;
