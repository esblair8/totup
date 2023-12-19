<template>
    <h2 class="title is-xs">Child Details</h2>

    <div class="field">
        <label class="label">Child's Full Name</label>
            <input v-model="childDetailsStore.fullName" class="input" type="text" placeholder="Full Name">
    </div>

    <div class="field">
        <label class="label">Parent or Guardian's Full Name</label>
        <input v-model="childDetailsStore.parentsFullName" class="input" type="text" placeholder="Full Name">
    </div>

    <div class="field">
        <label class="label">Parent's Email Address</label>
        <input v-model="childDetailsStore.parentsEmail" class="input" type="email" placeholder="email address">
    </div>

    <div class="field">
        <label class="label">Weekly Schedule</label>

        <div class="columns">
            <div class="column">
                <div class="columns is-mobile">
                    <label class="column checkbox"><input v-model="daysSelected.monday" type="checkbox"> Mon</label>
                    <div v-if="daysSelected.monday" class="column">
                        <div class="select is-small"><select v-model="childDetailsStore.schedule.monday">
                                <option selected>hours</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class=" columns  is-mobile">
                    <label class="column checkbox"><input v-model="daysSelected.tuesday" type="checkbox"> Tues</label>
                    <div v-if="daysSelected.tuesday" class="column">
                        <div class="select is-small"><select  v-model="childDetailsStore.schedule.tuesday">
                                <option selected>hours</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="columns  is-mobile">
                    <label class="column checkbox"><input v-model="daysSelected.wednesday" type="checkbox"> Wed</label>
                    <div v-if="daysSelected.wednesday" class="column">
                        <div class="select is-small"><select  v-model="childDetailsStore.schedule.wednesday">
                                <option selected>hours</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div class="columns is-mobile">
                    <label class="column checkbox"><input v-model="daysSelected.thursday" type="checkbox"> Thurs</label>
                    <div v-if="daysSelected.thursday" class="column">
                        <div class="select is-small"><select  v-model="childDetailsStore.schedule.thursday">
                                <option selected>hours</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="columns is-mobile">
                    <label class="column checkbox"><input v-model="daysSelected.friday" type="checkbox"> Fri</label>
                    <div v-if="daysSelected.friday" class="column">
                        <div class="select is-small"><select v-model="childDetailsStore.schedule.friday">
                                <option selected>hours</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="columns  is-mobile">
                    <label class="column checkbox"><input v-model="daysSelected.saturday" type="checkbox"> Sat</label>
                    <div v-if="daysSelected.saturday" class="column">
                        <div class="select is-small"><select  v-model="childDetailsStore.schedule.saturday">
                                <option selected>hours</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="columns is-mobile">
                    <label class="column checkbox"><input v-model="daysSelected.sunday" type="checkbox"> Sun</label>
                    <div v-if="daysSelected.sunday" class="column">
                        <div class="select is-small"><select v-model="childDetailsStore.schedule.sunday">
                                <option selected>hours</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import { reactive } from 'vue'
import useChildDetailsStore from '@/stores/childDetailsStore'

const childDetailsStore = useChildDetailsStore()

const daysSelected = reactive({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
})

</script>

<style></style>