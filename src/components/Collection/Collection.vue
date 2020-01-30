<template>
    <div>
        <first-part-collection />
        <second-part-collection />
        <third-part-collection />
        <forth-part-collection />
        <fith-part-collection />
        <sixth-part-collection />
        <seventh-part-collection />
        <eight-part-collection />
    </div>
</template>

<script>
import FirstPartCollection from './FirstPartCollection'
import SecondPartCollection from './SecondPartCollection'
import ThirdPartCollection from './ThirdPartCollection'
import ForthPartCollection from './ForthPartCollection'
import FithPartCollection from './FithPartCollection'
import SixthPartCollection from './SixthPartCollection'
import SeventhPartCollection from './SeventhPartCollection'
import EightPartCollection from './EightPartCollection'

export default {
  name: 'Collection',
  components: {
    FirstPartCollection,
    SecondPartCollection,
    ThirdPartCollection,
    ForthPartCollection,
    FithPartCollection,
    SixthPartCollection,
    SeventhPartCollection,
    EightPartCollection
  }
}
</script>