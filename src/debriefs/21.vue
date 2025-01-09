<template>
  <div class="container">
    <h1>Project 21: Casino fraud prevention</h1>
    <div>
      <br />
      <div>
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">Teammates:</li>
          <li class="list-group-item">Kris Smietana</li>
          <li class="list-group-item">Simon Sorich</li>
        </ul>
      </div>
      <br />
      <div>
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">What made you smile?</li>
          <li class="list-group-item">Starting a new cycle of training</li>
        </ul>
      </div>
      <br />
      <div>
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">
            What did you find confusing? Did you encounter any issues?
          </li>
          <li class="list-group-item">
            While the documentation mentions that a 0 second TTL results in a permanent block, this
            is not obvious on the blocklist page in Recomm. Perhaps adding this information to the
            tooltip displayed above the TTL form field would make the form more useable.
          </li>
          <li class="list-group-item">
            We were not able to find a way to create a block based on <em>consecutive</em> declines.
            Blocklists have access to the declined payment instrument velocity value, but this only
            includes the count of declined transactions for the last 24 hours and does not take into
            account consecutive declines. Accordingly, we could not find a way to implement the
            first block exactly as requested in the project.
          </li>
          <li class="list-group-item">
            The value for <strong>declined payment instrument velocity</strong> does not appear to
            work correctly. In the transaction risk metadata, the value remains as '-' despite
            previous declines on the payment instrument. Because of this, we could not block
            transactions by declined payment instrument velocity.
          </li>
          <li class="list-group-item">
            We could not find a way to test a block using a mismatched bank country.
          </li>
          <li class="list-group-item">
            Detection of Tor usage does not seem to be working correctly. We attempted a test
            transaction using Tor, but the value of <strong>Is Tor</strong> in the risk metadata was
            set to 'No' and the block was not performed.
          </li>
          <li class="list-group-item">
            Detection of VPN usage does not seem to be working correctly. We attempted a test
            transaction using a VPN, but the value of <strong>Is VPN</strong> in the risk metadata
            was set to 'No' and the block was not performed.
          </li>
        </ul>
      </div>
    </div>
    <router-link :to="{ name: 'Debriefs' }" class="btn btn-primary text-center m-4 ms-0"
      >Back to debriefs</router-link
    >
  </div>
</template>
<script setup lang="ts"></script>
