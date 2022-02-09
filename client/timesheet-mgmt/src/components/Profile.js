import { useState, useEffect } from 'react'
import axios from 'axios'
import authHeader from '../services/auth-header'

const Profile = () => {
  const [profile, setProfile] = useState(null)
  const API_URL = 'http://localhost:8080/1'

  useEffect(() => {
    axios.get(API_URL, { headers: authHeader() }).then((res) => {
      setProfile(res.data)
    })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    document.body.style.cursor = 'wait'
    axios.put(API_URL, profile, { headers: authHeader() }).then((res) => {
      document.body.style.cursor = 'default'
      alert('Successfully Updated!')
    })
  }

  if (profile == null) {
    return <div>Still loading...</div>
  }
  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <h1>Contact Info:</h1>
        <div className="form-control">
          <label style={{ marginRight: 10 }}>Cell Phone: </label>
          <input
            type="text"
            value={profile.cellPhone}
            onChange={(e) => {
              setProfile({ ...profile, cellPhone: e.target.value })
            }}
          />
        </div>
        <div className="form-control">
          <label style={{ marginRight: 10 }}>Email: </label>
          <input
            type="text"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label style={{ marginRight: 10 }}>Address Line 1: </label>
          <input
            type="text"
            value={profile.addressLine1}
            onChange={(e) =>
              setProfile({ ...profile, addressLine1: e.target.value })
            }
          />
        </div>
        <div className="form-control">
          <label style={{ marginRight: 10 }}>Address Line 2: </label>
          <input
            type="text"
            value={profile.addressLine2}
            onChange={(e) =>
              setProfile({ ...profile, addressLine2: e.target.value })
            }
          />
        </div>
        <div className="form-control">
          <label style={{ marginRight: 10 }}>City: </label>
          <input
            type="text"
            value={profile.city}
            onChange={(e) => setProfile({ ...profile, city: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label style={{ marginRight: 10 }}>State: </label>
          <input
            type="text"
            value={profile.state}
            onChange={(e) => setProfile({ ...profile, state: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label style={{ marginRight: 10 }}>Zip Code: </label>
          <input
            type="text"
            value={profile.zipCode}
            onChange={(e) =>
              setProfile({ ...profile, zipCode: e.target.value })
            }
          />
        </div>
        <h1 style={{ marginTop: 20 }}>Emergency Contact:</h1>
        <div className="form-control">
          <label style={{ marginRight: 10 }}>First Name:</label>
          <input
            type="text"
            value={profile.emergencyFirstName}
            onChange={(e) =>
              setProfile({ ...profile, emergencyFirstName: e.target.value })
            }
          />
        </div>
        <div className="form-control">
          <label style={{ marginRight: 10 }}>Last Name: </label>
          <input
            type="text"
            value={profile.emergencyLastName}
            onChange={(e) =>
              setProfile({ ...profile, emergencyLastName: e.target.value })
            }
          />
        </div>
        <div className="form-control">
          <label style={{ marginRight: 10 }}>Cell Phone: </label>
          <input
            type="text"
            value={profile.emergencyCellPhone}
            onChange={(e) =>
              setProfile({ ...profile, emergencyCellPhone: e.target.value })
            }
          />
        </div>

        <input
          style={{ borderStyle: 'solid', marginTop: 20 }}
          type="submit"
          value="Save Task"
        />
      </form>
    </div>
  )
}

export default Profile
