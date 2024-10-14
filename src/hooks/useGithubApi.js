import axios from 'axios';
import { useState } from 'react';

const GITHUB_API_URL = 'https://api.github.com/search';

const useGithubApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchUsers = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`${GITHUB_API_URL}/users?q=${query}`);
      setData(response.data.items);
    } catch (err) {
      setError('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  const searchRepos = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`${GITHUB_API_URL}/repositories?q=${query}`);
      setData(response.data.items);
    } catch (err) {
      setError('Error fetching repositories');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    searchUsers,
    searchRepos,
  };
};

export default useGithubApi;
