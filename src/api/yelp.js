import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer d7Wf0sObNFJUFeLFPm_QY_l3PJfIFR2Og52u_HpD4AmMp6UrWshExuzA6_26JLVKG6MXOq7rQ87-jxi1WvJjW29LlmJTCg7iJh8om9hxZSCLHrp_b0R9O1Y9y77BYnYx',
  },
});
