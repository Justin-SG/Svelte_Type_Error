<script lang="ts">
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "$app/forms";
  import type { ActionData } from "./$types";

  const myFunction: SubmitFunction<ActionData, ActionData> = () => {
    return async ({ result }) => {
      if (result.type === "success") {
        const test = result.data?.justSomeRandomStuff;
      }
    };
  };
</script>

<form action="/" method="post" use:enhance={myFunction} />
